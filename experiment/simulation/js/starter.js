// VARIABLES
const mainPage = document.querySelector("#mainPage");
const setup1Page = document.querySelector("#setupPage1");
const setup2Page = document.querySelector("#setupPage2");

// IMAGES
const png1Starter = document.querySelector(".starter-png1");
const png1Sheet = document.querySelector("#png1-sheet");

// 3D CLIPS 
const clip1_3d = document.querySelector("#clip1-3d-starter");
const clip2_3d = document.querySelector("#clip2-3d-starter");
const clip3_3d = document.querySelector("#clip3-3d-starter");
const clip4_3d = document.querySelector("#clip4-3d-starter");

// NORMAL CLIPS
const clip1Normal = document.querySelector("#clip1-starter");
const clip2Normal = document.querySelector("#clip2-starter");
const clip3Normal = document.querySelector("#clip3-starter");
const clip4Normal = document.querySelector("#clip4-starter");

// DRAFTERS
const drafter1Starter = document.querySelector("#drafter1-starter");
const drafter2Starter = document.querySelector("#drafter2-starter");

// ARROWS
const arrSetup1 = document.querySelector(".arr-setup1");
const arrSetup2 = document.querySelector("#arr1-setup2");

//  NEXT BUTTONS
const arrNext = document.querySelector(".arr-next");
const nextToSetup1 = document.querySelector("#next-to-setup1");
const nextToSetup2 = document.querySelector("#next-to-setup2");
const nextToExps = document.querySelector("#nextBtnOfStarter");

// ############################################################################

// SETUP 1
nextToSetup1.addEventListener("click", () => {
    mainPage.style.visibility = "hidden";
    png1Starter.style.visibility = "hidden";
    nextToSetup1.style.visibility = "hidden";

    setup1Page.style.visibility = "visible";
})

png1Sheet.addEventListener("click", (evt) => {
    arrSetup1.style.visibility = "hidden";
    evt.target.style.animationPlayState = "running";
    setTimeout(()=> {
       arrNext.style.visibility = "visible";
        nextToSetup2.style.visibility = "visible"
    }, 1500);
})

// SETUP 2 
nextToSetup2.addEventListener("click",(evt) => {
    evt.target.style.visibility = "hidden";
    arrNext.style.visibility = "hidden";
    setup1Page.style.visibility = "hidden"

    setup2Page.style.visibility = "visible";
    setTimeout(timeDelay1Setup2, 500);
})

let clicks = 0;     // clicks will record the number of clicks in order to hide arrow and show next button for next experiment

function timeDelay1Setup2(){
    arrSetup2.style.visibility = "visible";
    clip1_3d.style.visibility = "visible";
    clip2_3d.style.visibility = "visible";
    clip3_3d.style.visibility = "visible";
    clip4_3d.style.visibility = "visible";
    drafter1Starter.style.visibility = "visible";
}

clip1_3d.addEventListener("click", () => {
    clip1_3d.style.visibility = "hidden";
    clip1Normal.style.visibility = "visible";
    clip1Normal.style.animationPlayState = "running";
    showNextBtn(clicks += 1);
});

clip2_3d.addEventListener("click", () => {
    clip2_3d.style.visibility = "hidden";
    clip2Normal.style.visibility = "visible";
    clip2Normal.style.animationPlayState = "running";
    showNextBtn(clicks += 1);
});

clip3_3d.addEventListener("click", () => {
    clip3_3d.style.visibility = "hidden";
    clip3Normal.style.visibility = "visible";
    clip3Normal.style.animationPlayState = "running";
    showNextBtn(clicks += 1);
});

clip4_3d.addEventListener("click", () => {
    clip4_3d.style.visibility = "hidden";
    clip4Normal.style.visibility = "visible";
    clip4Normal.style.animationPlayState = "running";
    showNextBtn(clicks += 1);
});

drafter1Starter.addEventListener("click", () => {
    drafter1Starter.style.visibility = "hidden";
    drafter2Starter.style.visibility = "visible";
    drafter2Starter.style.animationPlayState = "running";
    showNextBtn(clicks += 1);
});

function showNextBtn(clicks){
    if(clicks === 1){
        arrSetup2.style.visibility = "hidden";
    }
    if(clicks === 5){
        setTimeout(() => {
        nextToExps.style.visibility = "visible";
        arrNext.style.visibility = "visible";
    }, 1000);
    }
}