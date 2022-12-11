
const carouselDown2 = () => {


    let url = [
        "https://d32baadbbpueqt.cloudfront.net/Homepage/05b6a9d3-2d45-4381-80f2-2b3fdd2c56f0.jpg",
        "https://d32baadbbpueqt.cloudfront.net/Homepage/67885afc-5ba2-4f1d-a6dd-7012bf5b7b90.jpg",
        "https://d32baadbbpueqt.cloudfront.net/Homepage/7fcf7da7-9d0b-4e1a-b09e-e075825bc9ad.jpg",
    ]

    let images = document.createElement("img");
    let conatiner = document.getElementById("carousel3")
    let i = 0;
    images.src = url[i]
    conatiner.append(images)
    i++
    setInterval(function () {
        if (i === 3) {
            i = 0
        }
        images.src = url[i];
        conatiner.append(images)
        i++;

    }, 2000)
}
carouselDown2()

export { carouselDown2 };
