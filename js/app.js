const carDetail = document.querySelectorAll(".car-detail")
const carButton = document.querySelectorAll(".car-toggle-detail")

function eliminate() {
    carDetail.forEach(el => {
        el.setAttribute("style", "display: none")
    })
}



for (let i=0;i<carDetail.length;i++) {
    carButton[i].addEventListener("click", () => {
        carDetail.forEach(el => {
            el.setAttribute("style", "display:none")
        })
        if (carButton[i].innerText === "POKAŻ DETALE") {           
            carButton.forEach(el => el.innerText = "POKAŻ DETALE")
            carDetail[i].setAttribute("style", "display: null");
            carButton[i].innerText = "SCHOWAJ DETALE";
    } else if (carButton[i].innerText === "SCHOWAJ DETALE") {
            carButton[i].innerText = "POKAŻ DETALE";
            carDetail[i].setAttribute("style", "display: none");
        }
    })
}


carDetail.forEach(carDetailElement => {
    carDetailElement.addEventListener("click", () => {
        carDetail.forEach(el => {
            el.setAttribute("style", "display:none")
        })
        if (carDetailElement.innerText === "POKAŻ DETALE") {           
            carButton.forEach(el => el.innerText = "POKAŻ DETALE")
            carDetailElement.setAttribute("style", "display: null");
            carDetailElement.innerText = "SCHOWAJ DETALE";
        } else if (carDetailElement.innerText === "SCHOWAJ DETALE") {
            carDetailElement.innerText = "POKAŻ DETALE";
            carDetailElement.setAttribute("style", "display: none");
        }
    })
})


