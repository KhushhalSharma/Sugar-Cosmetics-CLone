
const carouselDown = () => {


    let url = [
        "https://d32baadbbpueqt.cloudfront.net/Homepage/f190c764-84cf-4eea-a381-8b701be65852.gif",
        "https://d32baadbbpueqt.cloudfront.net/Homepage/89e51326-1363-44e1-94f1-d5bd00bd2ca9.gif",
        "https://d32baadbbpueqt.cloudfront.net/Homepage/87591a7c-d8f8-499c-9562-c89000ef7e4a.jpg",
        "https://d32baadbbpueqt.cloudfront.net/Homepage/91374506-cc05-46f3-aff6-86a00e501c38.gif"
    ]

    let images = document.createElement("img");
    let conatiner = document.getElementById("carousel2")
    let i = 0;
    images.src = url[i]
    conatiner.append(images)
    i++
    setInterval(function () {
        if (i === 4) {
            i = 0
        }
        images.src = url[i];
        conatiner.append(images)
        i++;

    }, 2000)
}
carouselDown()

export { carouselDown };
