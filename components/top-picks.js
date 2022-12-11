let top_picks=[
    {
        image:"https://d32baadbbpueqt.cloudfront.net/Homepage/727c91d1-8040-4cab-a5d7-db81dd6f0e4b.gif"
    },
    {
        image:"https://d32baadbbpueqt.cloudfront.net/Homepage/84f0d36c-381f-4c62-8702-b0059b13094a.jpg"
    },
    {
        image:"https://d32baadbbpueqt.cloudfront.net/Homepage/0903f25c-ae3f-4de6-980b-1e3a4bbe2b6e.jpg"
    }
];

const topPick=document.getElementById("topPicks");

let topPicks=()=>{
    top_picks.forEach(function(el){

        let div=document.createElement("div");

        let image=document.createElement("img");
        image.src=el.image;

        div.append(image)

        topPick.append(div);
    })

}

topPicks();

export {topPick};