import { navbar } from "./components/navbar.js";

document.getElementById("nav").innerHTML=navbar();



let items=JSON.parse(localStorage.getItem("products"));

display(items)
function display(items){
    let products=document.getElementById("products");
    products.innerHTML="";
    items.forEach(function(el){
        
        let div=document.createElement("div");

        let image=document.createElement("img")
        image.src=el.image_link;

        let name=document.createElement("p");
        name.innerText=el.name;

        let price=document.createElement("h3");
        price.innerText=`$ ${el.price}`;

        let btn=document.createElement("button");
        btn.innerText="Add To Cart"
        btn.addEventListener("click",function(){
            addCart(el);
        })
    
        div.append(image,name,price,btn);

        products.append(div)

    })
}


let cartArr=[];
function addCart(el){
cartArr.push(el);
localStorage.setItem("cart-items",JSON.stringify(cartArr));
}



















document.getElementById("low").addEventListener("click",low);


function low(){
    items=items.sort((a,b)=>{
        return a.price-b.price;
    });
    display(items)
    console.log(items)
}





document.getElementById("high").addEventListener("click",high);


function high(){
    items=items.sort((a,b)=>{
        return b.price-a.price;
    });
    display(items)
    console.log(items)
}