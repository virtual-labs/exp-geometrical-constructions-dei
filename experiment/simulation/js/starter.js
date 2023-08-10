// SETUP 1 

document.querySelector("#next-to-setup1").addEventListener("click", () => {
    document.querySelector("#mainPage").style.visibility = "hidden";
    document.querySelector("#mainPageImg").style.visibility = "hidden";
    document.querySelector("#next-to-setup1").style.visibility = "hidden";

    document.querySelector("#setupPage1").style.visibility = "visible";
})

document.querySelector("#png1-sheet").addEventListener("click", (evt) => {
    document.querySelector(".arr-setup1").style.visibility = "hidden";
    // console.log(evt);
    evt.target.style.animationPlayState = "running";
    setTimeout(()=> {
        document.querySelector(".arr-next").style.visibility = "visible";
        document.querySelector("#next-to-setup2").style.visibility = "visible"
    }, 1500);
})

// SETUP 2 

document.querySelector("#next-to-setup2").addEventListener("click",(evt) => {
    document.querySelector("#next-to-setup2").style.visibility = "hidden";
    document.querySelector(".arr-next").style.visibility = "hidden";
    document.querySelector("#setupPage1").style.visibility = "hidden"

    document.querySelector("#setupPage2").style.visibility = "visible";
    // document.querySelector("#png3-sheet").style.visibility = "visible";
    // document.querySelector("#png4-board").style.visibility = "visible";

    setTimeout(timeDelay1Setup2, 500);
})

let clicks = 0;

function timeDelay1Setup2(){
    document.querySelector("#arr1-setup2").style.visibility = "visible";
    document.querySelector("#clip1-3d-starter").style.visibility = "visible";
    document.querySelector("#clip2-3d-starter").style.visibility = "visible";
    document.querySelector("#clip3-3d-starter").style.visibility = "visible";
    document.querySelector("#clip4-3d-starter").style.visibility = "visible";
    document.querySelector("#drafter1-starter").style.visibility = "visible";
}

document.querySelector("#clip1-3d-starter").addEventListener("click", () => {
    document.querySelector("#clip1-3d-starter").style.visibility = "hidden";
    document.querySelector("#clip1-starter").style.visibility = "visible";
    document.querySelector("#clip1-starter").style.animationPlayState = "running";
    showNextBtn(clicks += 1);
});

document.querySelector("#clip2-3d-starter").addEventListener("click", () => {
    document.querySelector("#clip2-3d-starter").style.visibility = "hidden";
    document.querySelector("#clip2-starter").style.visibility = "visible";
    document.querySelector("#clip2-starter").style.animationPlayState = "running";
    showNextBtn(clicks += 1);
});

document.querySelector("#clip3-3d-starter").addEventListener("click", () => {
    document.querySelector("#clip3-3d-starter").style.visibility = "hidden";
    document.querySelector("#clip3-starter").style.visibility = "visible";
    document.querySelector("#clip3-starter").style.animationPlayState = "running";
    showNextBtn(clicks += 1);
});

document.querySelector("#clip4-3d-starter").addEventListener("click", () => {
    document.querySelector("#clip4-3d-starter").style.visibility = "hidden";
    document.querySelector("#clip4-starter").style.visibility = "visible";
    document.querySelector("#clip4-starter").style.animationPlayState = "running";
    showNextBtn(clicks += 1);
});

document.querySelector("#drafter1-starter").addEventListener("click", () => {
    document.querySelector("#drafter1-starter").style.visibility = "hidden";
    document.querySelector("#drafter2-starter").style.visibility = "visible";
    document.querySelector("#drafter2-starter").style.animationPlayState = "running";
    showNextBtn(clicks += 1);
});

function showNextBtn(clicks){
    // console.log(clicks);
    if(clicks === 1){
        document.querySelector("#arr1-setup2").style.visibility = "hidden";
    }
    if(clicks === 5){
        setTimeout(() => {
        document.querySelector("#nextBtnOfStarter").style.visibility = "visible";
        document.querySelector(".arr-next").style.visibility = "visible";
    }, 1000);
    }
}