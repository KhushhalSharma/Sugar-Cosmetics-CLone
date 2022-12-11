
const carousel=()=>{


    let url=[
        "https://d32baadbbpueqt.cloudfront.net/Homepage/259790f5-3c09-43f3-8dde-49c3de49f0c4.jpg",
        "https://d32baadbbpueqt.cloudfront.net/Homepage/32e53a7b-879e-4c34-a5bc-b95c85ee4a9e.jpg",
        "https://d32baadbbpueqt.cloudfront.net/Homepage/87591a7c-d8f8-499c-9562-c89000ef7e4a.jpg",
        "https://d32baadbbpueqt.cloudfront.net/Homepage/91374506-cc05-46f3-aff6-86a00e501c38.gif"
    ]
    
    let images=document.createElement("img");
    let conatiner=document.getElementById("carousel")
    let i=0;
    images.src=url[i]
    conatiner.append(images)
    i++
    setInterval(function(){
        if(i===4){
            i=0
        }
        images.src=url[i];
        conatiner.append(images)
        i++;
    
    },2000)
    }
carousel()

export {carousel};