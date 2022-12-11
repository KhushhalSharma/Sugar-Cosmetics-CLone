import { navbar } from "./components/navbar.js";
import {footer} from "./components/footer.js";
document.getElementById("footer").innerHTML=footer();
document.getElementById("nav").innerHTML=navbar();



let items=JSON.parse(localStorage.getItem("cart-items"));
let arr=document.getElementById("items").innerHTML=`Cart Items : ${items.length}`

let total=items.reduce(function(acc,el){
    return Number(acc)+Number(el.price);
},0)

let price=document.getElementById("price").innerHTML=`Cart Total : $${total}`

display(items)
function display(items){
    items.forEach(function(el,i){
        let append=document.getElementById("append");
        let div=document.createElement("div");

        let image=document.createElement("img");
        image.src=el.image_link;


        let name=document.createElement("p");
        name.innerText=el.name;

        let price=document.createElement("h3");
        price.innerText=el.price;

        let btn=document.createElement("button");
        btn.innerText="Remove";
        btn.addEventListener("click",function(event){
            event.target.parentNode.remove();
            dlt(i)
        })


        div.append(image,name,price,btn)

        append.append(div)




    })
}

function dlt(i){
    console.log(i);
    items.splice(i,1)
    localStorage.setItem("cart-items",JSON.stringify(items))
    let arr=document.getElementById("items").innerHTML=`Cart Items : ${items.length}`;
    window.location.href="./cart.html"
}




















