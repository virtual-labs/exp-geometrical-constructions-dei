// VARIABLES;
// IMAGES

const png1Step1 = document.querySelector("#png1-step1");
const png2Step1 = document.querySelector("#png2-step1");
const png3Step1 = document.querySelector("#png3-step1");
const png4Step1 = document.querySelector("#png4-step1");
const finalPng = document.querySelector("#finalPng-step1");

// DROPMENUS, PENCILS, COMPASS AND INSTRUCTIONS

const dropMenu1Step1 = document.querySelector("#dropMenu1-step1");
const dropMenu2Step1 = document.querySelector("#dropMenu2-step1");
const dropMenu3Step1 = document.querySelector("#dropMenu3-step1");

const pencil1Step1 = document.querySelector("#pencil1-step1");
const pencil2Step1 = document.querySelector("#pencil2-step1");
const pencil3Step1 = document.querySelector("#pencil3-step1");

const comp1Step1 = document.querySelector("#compass1-step1");

const instruction1Step1 = document.querySelector("#instructions-step1");

// GIFS

const gif1Step1 = document.querySelector("#gif1-step1");
const gif2Step1 = document.querySelector("#gif2-step1");
const gif3Step1 = document.querySelector("#gif3-step1");
const gif4Step1 = document.querySelector("#gif4-step1");
const gif5Step1 = document.querySelector("#gif5-step1");
const gif6Step1 = document.querySelector("#gif6-step1");

// TRANSBOXES

const trans1Step1 = document.querySelector("#trans1-step1");
const trans2Step1 = document.querySelector("#trans2-step1");
const trans3Step1 = document.querySelector("#trans3-step1");
const trans4Step1 = document.querySelector("#trans4-step1");

// ARROWS

const arr1Step1 = document.querySelector("#arr1-step1");
const arr2Step1 = document.querySelector("#arr2-step1");
const arr3Step1 = document.querySelector("#arr3-step1");
const arr4Step1 = document.querySelector("#arr4-step1");
const arr5Step1 = document.querySelector("#arr5-step1");

// NEXT BUTTONS 

const arrNext = document.querySelector("#arr-next");
const nextToFinalPng = document.querySelector("#nextToFinalPng");
const nextBtnExp1 = document.querySelector("#nextToExpListFromExp1");

// once dom loaded then trans1Step1 will get activated.
addEventListener("DOMContentLoaded", () =>{
    trans1Step1.style.visibility = "visible";
    arr1Step1.style.visibility = "visible";
    png1Step1.style.visibility = "visible";
});

trans1Step1.addEventListener("click",() => {
    trans1Step1.style.visibility = "hidden";
    arr1Step1.style.visibility = "hidden";
    dropMenu1Step1.style.visibility = "visible";
});


// dropmenu 1 changes

dropMenu1Step1.addEventListener("change",(evt)=>{
    let selectedValue = dropMenu1Step1.value;
    if(selectedValue === "hPencil"){
        dropMenu1Step1.style.visibility = "hidden";
        pencil1Step1.style.visibility = "visible";
        arr2Step1.style.visibility = "visible";
    }else{
        alert("Please select H Pencil");
    }
});

// when first H Pencil was clicked 

pencil1Step1.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    png1Step1.style.visibility = "hidden";
    gif1Step1.style.visibility = "visible";
    arr2Step1.style.visibility = "hidden";

    setTimeout((evt) => {
        gif1Step1.style.visibility = "hidden";
        png2Step1.style.visibility = "visible";

        instruction1Step1.innerText = "Now, select 3H pencil and draw another line from A at any suitable angle.";

        arr1Step1.style.visibility = "visible";
        trans2Step1.style.visibility = "visible";
    }, 10000)
});

trans2Step1.addEventListener("click", ()=> {
    trans2Step1.style.visibility = "hidden";
    arr1Step1.style.visibility = "hidden";
    dropMenu2Step1.style.visibility = "visible";
    dropMenu2Step1.value = "default";
});


dropMenu2Step1.addEventListener("change",() => {
    let selectedValue = dropMenu2Step1.value;
    if(selectedValue === "3hPencil"){
        dropMenu2Step1.style.visibility = "hidden";
        pencil2Step1.style.visibility = "visible";
        arr3Step1.style.visibility = "visible";
    }else{
        alert("Please select 3H Pencil");
    }
});

pencil2Step1.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr3Step1.style.visibility = "hidden";
    png2Step1.style.visibility = "hidden";

    gif2Step1.style.visibility = "visible";

    setTimeout(() => {
    png3Step1.style.visibility = "visible";
    gif2Step1.style.visibility = "hidden";
    instruction1Step1.innerText = "Select the compass and set it to a certain length. Starting from point A, draw 5 equidistant arcs on the line AC.";

    arr4Step1.style.visibility = "visible";
    trans3Step1.style.visibility = "visible";
    }, 12000);
});

trans3Step1.addEventListener("click", ()=> {
    trans3Step1.style.visibility = "hidden";
    arr4Step1.style.visibility = "hidden";
    arr5Step1.style.visibility = "visible";
    comp1Step1.style.visibility = "visible";
});

comp1Step1.addEventListener("click", (evt)=>{
    evt.target.style.visibility = "hidden";
    arr5Step1.style.visibility = "hidden";
    png3Step1.style.visibility = "hidden";

    gif3Step1.style.visibility = "visible";

    setTimeout(()=>{
        gif3Step1.style.visibility = "hidden";
        png4Step1.style.visibility = "visible";
        arr1Step1.style.visibility = "visible";
        instruction1Step1.innerText = "Again select 3H pencil and join the last arc with point B. Similarly draw parallel lines from rest of the arcs, dividing the line segment AB into 5 equal parts.";
        trans4Step1.style.visibility = "visible";
    }, 23000);
});

trans4Step1.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr1Step1.style.visibility = "hidden";
    dropMenu3Step1.style.visibility = "visible";
    dropMenu2Step1.value = "default";
});

dropMenu3Step1.addEventListener("change",() => {
    let selectedValue = dropMenu3Step1.value;
    if(selectedValue === "3hPencil"){
        dropMenu3Step1.style.visibility = "hidden";
        pencil3Step1.style.visibility = "visible";
        arr3Step1.style.visibility = "visible";
    }else{
        alert("Please select 3H Pencil");
    }
});

pencil3Step1.addEventListener("click", (evt)=>{
    evt.target.style.visibility = "hidden";
    arr3Step1.style.visibility = "hidden";
    png4Step1.style.visibility = "hidden";
    gif4Step1.style.visibility = "visible";

    setTimeout(() => {
    gif4Step1.style.visibility = "hidden";
    gif5Step1.style.visibility = "visible";
        
        setTimeout(() => {
            gif5Step1.style.visibility = "hidden";
            gif6Step1.style.visibility = "visible";

            setTimeout(() => {
                nextToFinalPng.style.visibility = "visible";
                arrNext.style.visibility = "visible";
            }, 2500)
        }, 16000);
    }, 24000)
});

nextToFinalPng.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arrNext.style.visibility = "hidden";
    gif6Step1.style.visibility = "hidden";
    finalPng.style.visibility = "visible";

    setTimeout(()=> {
        nextBtnExp1.style.visibility = "visible";
        arrNext.style.visibility = "visible";
    }, 1500);
})

nextBtnExp1.addEventListener("click", () => {
    // parent.location = `../../html/exp-list.html`;
    parent.location = `../exp-list.html`;   // both of these addresses will work.
})