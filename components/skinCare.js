let skinCare=[
    {
        image:"https://cdn.shopify.com/s/files/1/0906/2558/products/CCLipScrubWBG-3.jpg?v=1628610315",
        price_before:"Rs"+3000,
        price_after:"Rs"+1199,
        discount:`(14% Off)`
    },{
        image:"https://cdn.shopify.com/s/files/1/0906/2558/products/Coffee-culture-cleansing-balm-stick-01.jpg?v=1643375708",
        price_before:"Rs"+3000,
        price_after:"Rs"+1199,
        discount:`(14% Off)`
    },{
        image:"https://cdn.shopify.com/s/files/1/0906/2558/products/Hyaluronic-Serum-3_1.jpg?v=1626423730",
        price_before:"Rs"+3000,
        price_after:"Rs"+1199,
        discount:`(14% Off)`
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_61109b87-1ae6-4cb4-8550-5b57d688a4eb.jpg?v=1651852771",
        price_before:"Rs"+3000,
        price_after:"Rs"+1199,
        discount:`(14% Off)`
    }
]



const conatiner=document.getElementById("skinCare");
const skincare=()=>{

    skinCare.forEach(function(el){

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

skincare()

export {skincare}
