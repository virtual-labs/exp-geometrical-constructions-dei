// VARIABLES;
// IMAGES

const png1Step1 = document.querySelector("#png1-step1");
const png2Step1 = document.querySelector("#png2-step1");
const png3Step1 = document.querySelector("#png3-step1");
const png4Step1 = document.querySelector("#png4-step1");
const png5Step1 = document.querySelector("#png5-step1");
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
const gif7Step1 = document.querySelector("#gif7-step1");
const gif8Step1 = document.querySelector("#gif8-step1");
const gif9Step1 = document.querySelector("#gif9-step1");
const gif10Step1 = document.querySelector("#gif10-step1");
const gif11Step1 = document.querySelector("#gif11-step1");
const gif12Step1 = document.querySelector("#gif12-step1");
const gif13Step1 = document.querySelector("#gif13-step1");

// TRANSBOXES

const trans1Step1 = document.querySelector("#trans1-step1");
const trans2Step1 = document.querySelector("#trans2-step1");
const trans3Step1 = document.querySelector("#trans3-step1");
const trans4Step1 = document.querySelector("#trans4-step1");
const trans5Step1 = document.querySelector("#trans5-step1");
const trans6Step1 = document.querySelector("#trans6-step1");
const trans7Step1 = document.querySelector("#trans7-step1");
const trans8Step1 = document.querySelector("#trans8-step1");
const trans9Step1 = document.querySelector("#trans9-step1");
const trans10Step1 = document.querySelector("#trans10-step1");
const trans11Step1 = document.querySelector("#trans11-step1");
const trans12Step1 = document.querySelector("#trans12-step1");
const trans13Step1 = document.querySelector("#trans13-step1");

// ARROWS

const arr1Step1 = document.querySelector("#arr1-step1");
const arr2Step1 = document.querySelector("#arr2-step1");
const arr3Step1 = document.querySelector("#arr3-step1");
const arr4Step1 = document.querySelector("#arr4-step1");
const arr5Step1 = document.querySelector("#arr5-step1");
const arr6Step1 = document.querySelector("#arr6-step1");
const arr7Step1 = document.querySelector("#arr7-step1");
const arr8Step1 = document.querySelector("#arr8-step1");
const arr9Step1 = document.querySelector("#arr9-step1");
const arr10Step1 = document.querySelector("#arr10-step1");

// NEXT BUTTONS 

const arrNext = document.querySelector("#arr-next");
const nextToFinalPng = document.querySelector("#nextToFinalPng");
const nextBtnExp1 = document.querySelector("#nextToExpListFromExp1");

// once dom loaded then trans1Step1 will get activated.
addEventListener("DOMContentLoaded", () =>{
    trans1Step1.style.visibility = "visible";
    png1Step1.style.visibility = "visible";
});

trans1Step1.addEventListener("click",() => {
    trans1Step1.style.visibility = "hidden";
    arr1Step1.style.visibility = "hidden";
    arr2Step1.style.visibility = "hidden";
    dropMenu1Step1.style.visibility = "visible";
});


// dropmenu 1 changes

dropMenu1Step1.addEventListener("change",(evt)=>{
    let selectedValue = dropMenu1Step1.value;
    if(selectedValue === "hPencil"){
        dropMenu1Step1.style.visibility = "hidden";
        pencil1Step1.style.visibility = "visible";
        arr3Step1.style.visibility = "visible";
    }else{
        alert("Please select H Pencil");
    }
});

// when first H Pencil was clicked 

pencil1Step1.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    png1Step1.style.visibility = "hidden";
    gif1Step1.style.visibility = "visible";
    arr3Step1.style.visibility = "hidden";

    setTimeout((evt) => {
        gif1Step1.style.visibility = "hidden";
        png2Step1.style.visibility = "visible";

        instruction1Step1.innerText = "Now, select 3H pencil and draw another line from A at any suitable angle.";

        arr1Step1.style.visibility = "visible";
        arr2Step1.style.visibility = "visible";
        trans2Step1.style.visibility = "visible";
    }, 10000)
});

trans2Step1.addEventListener("click", ()=> {
    trans2Step1.style.visibility = "hidden";
    arr2Step1.style.visibility = "hidden";
    arr1Step1.style.visibility = "hidden";
    dropMenu2Step1.style.visibility = "visible";
    dropMenu2Step1.value = "default";
});


dropMenu2Step1.addEventListener("change",() => {
    let selectedValue = dropMenu2Step1.value;
    if(selectedValue === "3hPencil"){
        dropMenu2Step1.style.visibility = "hidden";
        pencil2Step1.style.visibility = "visible";
        arr4Step1.style.visibility = "visible";
    }else{
        alert("Please select 3H Pencil");
    }
});

pencil2Step1.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr4Step1.style.visibility = "hidden";
    png2Step1.style.visibility = "hidden";

    gif2Step1.style.visibility = "visible";

    setTimeout(() => {
    png3Step1.style.visibility = "visible";
    gif2Step1.style.visibility = "hidden";
    instruction1Step1.innerText = "Select the compass and set it to a certain length. Starting from point A, draw 5 equidistant arcs on the line AC.";

    arr1Step1.style.visibility = "visible";
    arr1Step1.style.top = "60px";
    arr5Step1.style.visibility = "visible";
    trans3Step1.style.visibility = "visible";
    }, 10000);
});

trans3Step1.addEventListener("click", ()=> {
    trans3Step1.style.visibility = "hidden";
    arr1Step1.style.visibility = "hidden";
    arr5Step1.style.visibility = "hidden";

    arr6Step1.style.visibility = "visible";
    comp1Step1.style.visibility = "visible";
});

comp1Step1.addEventListener("click", (evt)=>{
    evt.target.style.visibility = "hidden";
    arr6Step1.style.visibility = "hidden";

    png3Step1.style.visibility = "hidden"
    gif3Step1.style.visibility = "visible";

    setTimeout(() => {
        trans4Step1.style.visibility = "visible";
        arr7Step1.style.visibility = "visible";
    }, 6000);
});

trans4Step1.addEventListener("click", (evt)=> {
    evt.target.style.visibility = "hidden";
    arr7Step1.style.visibility = "hidden";
    gif3Step1.style.visibility = "hidden";

    gif4Step1.style.visibility = "visible";

    setTimeout(()=>{
        arr8Step1.style.visibility = "visible";
        trans5Step1.style.visibility = "visible";
    }, 5500);
});

trans5Step1.addEventListener("click", (evt)=> {
    evt.target.style.visibility = "hidden";
    arr8Step1.style.visibility = "hidden";
    gif4Step1.style.visibility = "hidden";

    gif5Step1.style.visibility = "visible";

    setTimeout(()=>{
        arr9Step1.style.visibility = "visible";
        trans6Step1.style.visibility = "visible";
    }, 5500);
});

trans6Step1.addEventListener("click", (evt)=> {
    evt.target.style.visibility = "hidden";
    arr9Step1.style.visibility = "hidden";
    gif5Step1.style.visibility = "hidden";

    gif6Step1.style.visibility = "visible";

    setTimeout(()=>{
        arr10Step1.style.visibility = "visible";
        trans7Step1.style.visibility = "visible";
    }, 5500);
});

trans7Step1.addEventListener("click", (evt)=> {
    evt.target.style.visibility = "hidden";
    arr10Step1.style.visibility = "hidden";
    gif6Step1.style.visibility = "hidden";

    gif7Step1.style.visibility = "visible";

    setTimeout(()=>{
        gif7Step1.style.visibility = "hidden";
        png4Step1.style.visibility = "visible";
        arr2Step1.style.visibility = "visible";
        arr1Step1.style.visibility = "visible";
        instruction1Step1.innerText = "Again select 3H pencil and join the last arc with point B. Similarly draw parallel lines from rest of the arcs, dividing the line segment AB into 5 equal parts.";
        trans8Step1.style.visibility = "visible";
    }, 5500);
});

trans8Step1.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr1Step1.style.visibility = "hidden";
    arr2Step1.style.visibility = "hidden";
    dropMenu3Step1.style.visibility = "visible";
    dropMenu2Step1.value = "default";
});

dropMenu3Step1.addEventListener("change",() => {
    let selectedValue = dropMenu3Step1.value;
    if(selectedValue === "3hPencil"){
        dropMenu3Step1.style.visibility = "hidden";
        pencil3Step1.style.visibility = "visible";
        arr4Step1.style.visibility = "visible";
    }else{
        alert("Please select 3H Pencil");
    }
});

pencil3Step1.addEventListener("click", (evt)=>{
    evt.target.style.visibility = "hidden";
    arr4Step1.style.visibility = "hidden";
    png4Step1.style.visibility = "hidden";
    gif8Step1.style.visibility = "visible";

    setTimeout(()=>{
        trans9Step1.style.visibility = "visible";
        arr4Step1.style.visibility = "visible";
    }, 8000);
});

trans9Step1.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr4Step1.style.visibility = "hidden";
    gif8Step1.style.visibility = "hidden";

    gif9Step1.style.visibility = "visible";

    setTimeout(()=> {
        trans10Step1.style.visibility = "visible";
        arr4Step1.style.visibility = "visible";
    }, 8000);
});

trans10Step1.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr4Step1.style.visibility = "hidden";
    gif9Step1.style.visibility = "hidden";

    gif10Step1.style.visibility = "visible";

    setTimeout(()=> {
        trans11Step1.style.visibility = "visible";
        arr4Step1.style.visibility = "visible";
    }, 8000);
});

trans11Step1.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr4Step1.style.visibility = "hidden";
    gif10Step1.style.visibility = "hidden";

    gif11Step1.style.visibility = "visible";

    setTimeout(()=> {
        trans12Step1.style.visibility = "visible";
        arr4Step1.style.visibility = "visible";
    }, 8000);
});

trans12Step1.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr4Step1.style.visibility = "hidden";
    gif11Step1.style.visibility = "hidden";

    gif12Step1.style.visibility = "visible";

    setTimeout(()=> {
        trans13Step1.style.visibility = "visible";
        arr4Step1.style.visibility = "visible";
    }, 8000);
});

trans13Step1.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr4Step1.style.visibility = "hidden";
    gif12Step1.style.visibility = "hidden";

    gif13Step1.style.visibility = "visible";

    setTimeout(()=> {
        nextToFinalPng.style.visibility = "visible";
        arrNext.style.visibility = "visible";
    }, 2500);
});


nextToFinalPng.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arrNext.style.visibility = "hidden";
    gif13Step1.style.visibility = "hidden";
    finalPng.style.visibility = "visible";

    setTimeout(()=> {
        nextBtnExp1.style.visibility = "visible";
        arrNext.style.visibility = "visible";
    }, 2500);
})

nextBtnExp1.addEventListener("click", () => {
    // parent.location = `../../html/exp-list.html`;
    parent.location = `../exp-list.html`;   // both of this addresses will work.
})