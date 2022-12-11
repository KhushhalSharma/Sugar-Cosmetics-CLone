const deals = [
    {
        image: "https://d32baadbbpueqt.cloudfront.net/Homepage/6f66062a-1a39-4252-852b-646acb35d9af.jpg"
    },
    {
        image: "https://d32baadbbpueqt.cloudfront.net/Homepage/6359ed8e-1f43-44aa-b602-5142a7bfbd9f.jpg"
    },
    {
        image: "https://d32baadbbpueqt.cloudfront.net/Homepage/c5566abb-b38b-48e8-8244-6c542635c8d8.jpg"
    }
]


const container=document.getElementById("hot-deals");
const hotDeal=()=>{

    deals.forEach(function(el){
        let div=document.createElement("div");


        let image=document.createElement("img");
        image.src=el.image;


        div.append(image);


        container.append(div);

    })
}


hotDeal();


export {hotDeal};