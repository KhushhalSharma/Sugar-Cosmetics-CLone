
let best_seller=[
    {
        image:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_529c20ee-c872-4029-9702-8580d7b9a66f.jpg?v=1640178644",
        name:"Ace Of Face Foundation Stick",
        price:"Rs 999"
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0906/2558/products/WBG1_09f0cf83-792a-4185-8882-5e5e6909a459.jpg?v=1657814596",
        name:"Smudge Me Not Mini Liquid Lipstic",
        price:"Rs 799"
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0906/2558/products/424092031-1.jpg?v=1661529396",
        name:"Wingman Waterproof Microliner-01",
        price:"Rs 499"
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_6f55bcac-3e42-4253-88ee-cec0fa43c62a.jpg?v=1645608270",
        name:"Matte Attack Transferroof Lipstick",
        price:" Rs 699"
    }
]
const conatiner=document.getElementById("best-sellers");
const best_seller_Fun=()=>{
    best_seller.forEach(function(el){

        let box=document.createElement("div");

        let div=document.createElement("div");

        let image=document.createElement("img");
        image.src=el.image;

        let name=document.createElement("p");
        name.innerText=el.name;

        let price=document.createElement("p");
        price.innerText=el.price;
        
        let button=document.createElement("button");
        button.innerText="Add To Cart";

        box.append(name,price,button)

        div.append(image,box);

        conatiner.append(div);
    })
}


best_seller_Fun()


export {best_seller_Fun};