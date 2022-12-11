let savers=[
    {
        image:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-smudge-me-not-liquid-lipstick-matte-as-hell-crayon-lipstick-value-set-14600053391443.jpg?v=1619119204",
        price_before:"Rs"+3000,
        price_after:"Rs"+1199,
        discount:`(14% Off)`
    },{
        image:"https://cdn.shopify.com/s/files/1/0906/2558/products/Value-Set-11---WBG-Images_1.jpg?v=1659456262",
        price_before:"Rs"+3000,
        price_after:"Rs"+1199,
        discount:`(14% Off)`
    },{
        image:"https://cdn.shopify.com/s/files/1/0906/2558/products/2_bb525208-246a-4f40-b57f-d88372708398.jpg?v=1655308814",
        price_before:"Rs"+3000,
        price_after:"Rs"+1199,
        discount:`(14% Off)`
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_e4b6c948-178e-4bfe-a3b3-926119dea615.jpg?v=1649865681",
        price_before:"Rs"+3000,
        price_after:"Rs"+1199,
        discount:`(14% Off)`
    }
]



const conatiner=document.getElementById("savers");
const Savers=()=>{

    savers.forEach(function(el){

        let box=document.createElement("div")

        let div=document.createElement("div");

        let image=document.createElement("img");
        image.src=el.image;


        let price_before=document.createElement("p");
        price_before.innerText=el.price_before;
        price_before.style.textDecoration="line-through"
        

        let price_after=document.createElement("p");
        price_after.innerText=el.price_after;

        let discount=document.createElement("p");
        discount.innerText=el.discount;
        discount.style.color="red"

        let button=document.createElement("button");
        button.innerText="Choose Product"

        div.append(price_before,price_after,discount);

        box.append(image,div,button)

        conatiner.append(box)


    })

}

Savers()

export {Savers}
