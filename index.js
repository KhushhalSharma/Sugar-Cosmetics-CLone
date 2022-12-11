import { navbar } from "./components/navbar.js";
import { carousel } from "./components/carousel.js";
import { list } from "./components/lists.js"
import { best_seller_Fun } from "./components/best-seller.js";
import { justIn } from "./components/just-in.js";
import { hotDeal } from "./components/hot-deals.js";
import { youtube } from "./components/youtube.js"
import { topPick } from "./components/top-picks.js"
import { gifting } from "./components/gifting.js";
import { Savers } from "./components/savers.js";
import { carouselDown } from "./components/carousel2.js";
import { skincare } from "./components/skinCare.js";
import { carouselDown2 } from "./components/carousel3.js";
import { footer } from "./components/footer.js";
import { footer_up } from "./components/footer_up.js"
import { blog } from "./components/blog.js"
import { thisThat } from "./components/thisThat.js"
import { refer } from "./components/refer.js";
import {main} from "./components/main.js"



// *****************************************************************************************************************************************************



document.getElementById("main").innerHTML=main();
document.getElementById("referals").innerHTML = refer();
document.getElementById("thisThat").innerHTML = thisThat();
document.getElementById("Blog").innerHTML = blog();
document.getElementById("footer_up").innerHTML = footer_up();
document.getElementById("footer").innerHTML = footer();
document.getElementById("nav").innerHTML = navbar();
document.getElementById("lists").innerHTML = list();
document.getElementById("youTube").innerHTML = youtube();






let span = document.getElementsByTagName("span");
let div = document.getElementsByTagName("div");
let l = 0;

span[0].onclick = () => {
    console.log("left")
    l--;
    for (let i of div) {
        if (l === 0) {
            i.style.left = "0px"
        }
        if (l === 1) {
            i.style.left = "-880px"
        }

        if (l === 2) {
            i.style.left = "-1140px"
        }

        if (l === 3) {
            i.style.left = "-1340px"
        }

        if (l === 4) {
            i.style.left = "-1540px"
        }

        if (l === 5) {
            i.style.left = "-1840px"
        }

        if (l === 6) {
            i.style.left = "-2240px"
        }

        if (l === 7) {
            i.style.left = "-2540px"
        }


        if (l === 8) {
            i.style.left = "-2940px"
        }

        if (l === 9) {
            i.style.left = "-3240px"
        }

        if (l === 10) {
            i.style.left = "-4640px"
        }

    }

}








span[1].onclick = () => {
    console.log("right")
    l++;
    for (let i of div) {


        if (l === 1) {
            i.style.left = "-640px"
        }
        if (l === 2) {
            i.style.left = "-880px"
        }

        if (l === 3) {
            i.style.left = "-1140px"
        }

        if (l === 4) {
            i.style.left = "-1340px"
        }

        if (l === 5) {
            i.style.left = "-1540px"
        }

        if (l === 6) {
            i.style.left = "-1840px"
        }

        if (l === 7) {
            i.style.left = "-2240px"
        }

        if (l === 8) {
            i.style.left = "-2540px"
        }


        if (l === 9) {
            i.style.left = "-2940px"
        }

        if (l === 10) {
            i.style.left = "-3240px"
        }

        if (l === 10) {
            i.style.left = "-4640px"
        }





    }

}



let btn=document.getElementById("btn");
btn.addEventListener("click",myfunc);


async function myfunc(){
    
    let query=document.getElementById("query").value;

    try{
        let res=await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${query}`)

        let data=await res.json();
        localStorage.setItem("products",JSON.stringify(data));
        window.location.href="./search.html"

    }catch(err){
        console.log('err:', err)   
    }



}






































