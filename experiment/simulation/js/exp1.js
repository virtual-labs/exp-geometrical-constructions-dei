// VARIABLES

// DROPMENUS, PENCILS, COMPASS AND INSTRUCTIONS
const assemblyBox = document.querySelector("#assembly");

const instruction1Step3 = document.querySelector("#instructions-step3");

const comp1Step3 = document.querySelector("#compass1-step3");

const pencil1Step3 = document.querySelector("#pencil1-step3");
const pencil2Step3 = document.querySelector("#pencil2-step3");
const pencil3Step3 = document.querySelector("#pencil3-step3");

const dropMenu1Step3 = document.querySelector("#dropMenu1-step3");
const dropMenu2Step3 = document.querySelector("#dropMenu2-step3");
const dropMenu3Step3 = document.querySelector("#dropMenu3-step3");

// IMAGES
const png1Step3 = document.querySelector("#png1-step3");
const png2Step3 = document.querySelector("#png2-step3");
const png3Step3 = document.querySelector("#png3-step3");
const png4Step3 = document.querySelector("#png4-step3");
const finalPng = document.querySelector("#finalPng-step3");


// GIFS
const gif1Step3 = document.querySelector("#gif1-step3");
const gif2Step3 = document.querySelector("#gif2-step3");
const gif3Step3 = document.querySelector("#gif3-step3");
const gif4Step3 = document.querySelector("#gif4-step3");
const gif5Step3 = document.querySelector("#gif5-step3");
const gif6Step3 = document.querySelector("#gif6-step3");

// TRANSBOXES
const trans1Step3 = document.querySelector("#trans1-step3");
const trans2Step3 = document.querySelector("#trans2-step3");
const trans3Step3 = document.querySelector("#trans3-step3");
const trans4Step3 = document.querySelector("#trans4-step3");

// ARROWS
const arr1Step3 = document.querySelector("#arr1-step3");
const arr2Step3 = document.querySelector("#arr2-step3");
const arr3Step3 = document.querySelector("#arr3-step3");
const arr4Step3 = document.querySelector("#arr4-step3");
const arr5Step3 = document.querySelector("#arr5-step3");

// NEXT BUTTONS 
const arrNext = document.querySelector("#arr-next");
const nextToFinalPng = document.querySelector("#nextToFinalPng");
const nextBtnExp1 = document.querySelector("#nextToExpListFromExp1");



// once dom loaded then trans1Step3 will get activated.
addEventListener("DOMContentLoaded", () =>{
    trans1Step3.style.visibility = "visible";
    arr1Step3.style.visibility = "visible";
    png1Step3.style.visibility = "visible";
});

trans1Step3.addEventListener("click",() => {
    trans1Step3.style.visibility = "hidden";
    arr1Step3.style.visibility = "hidden";
    dropMenu1Step3.style.visibility = "visible";
});


// dropmenu 1 changes

dropMenu1Step3.addEventListener("change",(evt)=>{
    let selectedValue = dropMenu1Step3.value;
    if(selectedValue === "hPencil"){
        dropMenu1Step3.style.visibility = "hidden";
        pencil1Step3.style.visibility = "visible";
        arr2Step3.style.visibility = "visible";
    }else{
        alert("Please select H Pencil");
    }
});

// when first H Pencil was clicked 

pencil1Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    png1Step3.style.visibility = "hidden";
    arr2Step3.style.visibility = "hidden";
    
    gif1Step3.style.visibility = "visible";

    setTimeout((evt) => {
        gif1Step3.style.visibility = "hidden";
        png2Step3.style.visibility = "visible";

        instruction1Step3.innerText = "Now, select 3H pencil and draw another line from A at any suitable angle.";

        arr1Step3.style.visibility = "visible";
        trans2Step3.style.visibility = "visible";
    }, 10000)
});

trans2Step3.addEventListener("click", ()=> {
    trans2Step3.style.visibility = "hidden";
    arr1Step3.style.visibility = "hidden";
    dropMenu2Step3.style.visibility = "visible";
    dropMenu2Step3.value = "default";
});


dropMenu2Step3.addEventListener("change",() => {
    let selectedValue = dropMenu2Step3.value;
    if(selectedValue === "3hPencil"){
        dropMenu2Step3.style.visibility = "hidden";
        pencil2Step3.style.visibility = "visible";
        arr3Step3.style.visibility = "visible";
    }else{
        alert("Please select 3H Pencil");
    }
});

pencil2Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr3Step3.style.visibility = "hidden";
    png2Step3.style.visibility = "hidden";

    gif2Step3.style.visibility = "visible";

    setTimeout(() => {
    png3Step3.style.visibility = "visible";
    gif2Step3.style.visibility = "hidden";
    instruction1Step3.innerText = "Select the compass and set it to a certain length. Starting from point A, draw 5 equidistant arcs on the line AC.";

    arr4Step3.style.visibility = "visible";
    trans3Step3.style.visibility = "visible";
    }, 12000);
});

trans3Step3.addEventListener("click", ()=> {
    trans3Step3.style.visibility = "hidden";
    arr4Step3.style.visibility = "hidden";
    arr5Step3.style.visibility = "visible";
    comp1Step3.style.visibility = "visible";
});

comp1Step3.addEventListener("click", (evt)=>{
    evt.target.style.visibility = "hidden";
    arr5Step3.style.visibility = "hidden";
    png3Step3.style.visibility = "hidden";

    gif3Step3.style.visibility = "visible";

    setTimeout(()=>{
        gif3Step3.style.visibility = "hidden";
        png4Step3.style.visibility = "visible";
        arr1Step3.style.visibility = "visible";
        instruction1Step3.innerText = "Again select 3H pencil and join the last arc with point B. Similarly draw parallel lines from rest of the arcs, dividing the line segment AB into 5 equal parts.";
        trans4Step3.style.visibility = "visible";
    }, 22500);
});

trans4Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr1Step3.style.visibility = "hidden";
    dropMenu3Step3.style.visibility = "visible";
    dropMenu2Step3.value = "default";
});

dropMenu3Step3.addEventListener("change",() => {
    let selectedValue = dropMenu3Step3.value;
    if(selectedValue === "3hPencil"){
        dropMenu3Step3.style.visibility = "hidden";
        pencil3Step3.style.visibility = "visible";
        arr3Step3.style.visibility = "visible";
    }else{
        alert("Please select 3H Pencil");
    }
});

pencil3Step3.addEventListener("click", (evt)=>{
    evt.target.style.visibility = "hidden";
    arr3Step3.style.visibility = "hidden";
    png4Step3.style.visibility = "hidden";
    gif4Step3.style.visibility = "visible";

    setTimeout(() => {
    gif4Step3.style.visibility = "hidden";
    gif5Step3.style.visibility = "visible";
        
        setTimeout(() => {
            gif5Step3.style.visibility = "hidden";
            gif6Step3.style.visibility = "visible";

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
    gif6Step3.style.visibility = "hidden";
    assemblyBox.style.visibility = "hidden";
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