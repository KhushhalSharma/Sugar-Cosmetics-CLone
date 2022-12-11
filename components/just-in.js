let justIn=[
    {
        image:"https://cdn.shopify.com/s/files/1/0906/2558/products/427145088-pujo-everyday-kit-wbg-01.jpg?v=1662999028",
        price_before:"Rs"+3000,
        price_after:"Rs"+1199,
        discount:`(14% Off)`
    },{
        image:"https://cdn.shopify.com/s/files/1/0906/2558/products/01_with_pouch-_without-sleeves.jpg?v=1662567157",
        price_before:"Rs"+3000,
        price_after:"Rs"+1199,
        discount:`(14% Off)`
    },{
        image:"https://cdn.shopify.com/s/files/1/0906/2558/products/Vineeta_s-Favourite-Makeup-kit---WBG-images.jpg?v=1657555460",
        price_before:"Rs"+3000,
        price_after:"Rs"+1199,
        discount:`(14% Off)`
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_2d186f9b-9024-4e23-a0d2-a55b7671e89c.jpg?v=1657123108",
        price_before:"Rs"+3000,
        price_after:"Rs"+1199,
        discount:`(14% Off)`
    }
]



const conatiner=document.getElementById("just-in");
const just_in=()=>{

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

just_in()

export {justIn}
