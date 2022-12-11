let justIn=[
    {
        image:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-matte-as-hell-crayon-lipstick-minis-set-28270316945491.jpg?v=1623073051",
        price_before:"Rs"+3000,
        price_after:"Rs"+1199,
        discount:`(14% Off)`
    },{
        image:"https://cdn.shopify.com/s/files/1/0906/2558/products/04_b475d6dd-c07b-43b0-9f78-c989b2fe4f6d.jpg?v=1659446263",
        price_before:"Rs"+3000,
        price_after:"Rs"+1199,
        discount:`(14% Off)`
    },{
        image:"https://cdn.shopify.com/s/files/1/0906/2558/products/WBG1_09f0cf83-792a-4185-8882-5e5e6909a459.jpg?v=1657814596",
        price_before:"Rs"+3000,
        price_after:"Rs"+1199,
        discount:`(14% Off)`
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_37e8dc88-a720-44ed-a5f3-1e0f0e95bc17.jpg?v=1659517990",
        price_before:"Rs"+3000,
        price_after:"Rs"+1199,
        discount:`(14% Off)`
    }
]



const conatiner=document.getElementById("gifting");
const gifting=()=>{

    justIn.forEach(function(el){

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

gifting()

export {gifting}
