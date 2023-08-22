// VARIABLES

// DROPMENUS, PENCILS, COMPASS AND INSTRUCTIONS
const assemblyBox = document.querySelector("#assembly");

const instruction1Step3 = document.querySelector("#instructions-step3");

const comp1Step3 = document.querySelector("#compass1-step3");
const comp2Step3 = document.querySelector("#compass2-step3");

const protect1Step3 = document.querySelector("#protector1-step3");

const pencil1Step3 = document.querySelector("#pencil1-step3");
const pencil2Step3 = document.querySelector("#pencil2-step3");
const pencil3Step3 = document.querySelector("#pencil3-step3");
const pencil4Step3 = document.querySelector("#pencil4-step3");
const pencil5Step3 = document.querySelector("#pencil5-step3");

const dropMenu1Step3 = document.querySelector("#dropMenu1-step3");
const dropMenu2Step3 = document.querySelector("#dropMenu2-step3");
const dropMenu3Step3 = document.querySelector("#dropMenu3-step3");
const dropMenu4Step3 = document.querySelector("#dropMenu4-step3");
const dropMenu5Step3 = document.querySelector("#dropMenu5-step3");

// Images
const png1Step3 = document.querySelector("#png1-step3");
const png2Step3 = document.querySelector("#png2-step3");
const png3Step3 = document.querySelector("#png3-step3");
const png4Step3 = document.querySelector("#png4-step3");
const png5Step3 = document.querySelector("#png5-step3");
const png6Step3 = document.querySelector("#png6-step3");
const png7Step3 = document.querySelector("#png7-step3");
const png8Step3 = document.querySelector("#png8-step3");
const finalPng = document.querySelector("#finalPng-step3");

// GIFs
const gif1Step3 = document.querySelector("#gif1-step3");
const gif2Step3 = document.querySelector("#gif2-step3");
const gif3Step3 = document.querySelector("#gif3-step3");
const gif4Step3 = document.querySelector("#gif4-step3");
const gif5Step3 = document.querySelector("#gif5-step3");
const gif6Step3 = document.querySelector("#gif6-step3");
const gif7Step3 = document.querySelector("#gif7-step3");
const gif8Step3 = document.querySelector("#gif8-step3");
const gif9Step3 = document.querySelector("#gif9-step3");
const gif10Step3 = document.querySelector("#gif10-step3");
const gif11Step3 = document.querySelector("#gif11-step3");
const gif12Step3 = document.querySelector("#gif12-step3");
const gif13Step3 = document.querySelector("#gif13-step3");

// Transboxes
const trans1Step3 = document.querySelector("#trans1-step3");
const trans2Step3 = document.querySelector("#trans2-step3");
const trans3Step3 = document.querySelector("#trans3-step3");
const trans4Step3 = document.querySelector("#trans4-step3");
const trans5Step3 = document.querySelector("#trans5-step3");
const trans6Step3 = document.querySelector("#trans6-step3");
const trans7Step3 = document.querySelector("#trans7-step3");
const trans8Step3 = document.querySelector("#trans8-step3");
const trans9Step3 = document.querySelector("#trans9-step3");
const trans10Step3 = document.querySelector("#trans10-step3");
const trans11Step3 = document.querySelector("#trans11-step3");
const trans12Step3 = document.querySelector("#trans12-step3");
const trans13Step3 = document.querySelector("#trans13-step3");


// Arrows
const arr1Step3 = document.querySelector("#arr1-step3");
const arr2Step3 = document.querySelector("#arr2-step3");
const arr3Step3 = document.querySelector("#arr3-step3");
const arr4Step3 = document.querySelector("#arr4-step3");
const arr5Step3 = document.querySelector("#arr5-step3");
const arr6Step3 = document.querySelector("#arr6-step3");


// Next buttons
const arrNext = document.querySelector(".arr-next");
const nextToFinalPng = document.querySelector("#nextToFinalPng");
const nextBtnExp3 = document.querySelector("#nextToExpListFromExp3");


// once dom loaded then trans1Step3 will get activated.
addEventListener("DOMContentLoaded", () =>{
    arr1Step3.style.visibility = "visible";
    png1Step3.style.visibility = "visible";
    trans1Step3.style.visibility = "visible";
});

trans1Step3.addEventListener("click",(evt) => {
    evt.target.style.visibility = "hidden";
    arr1Step3.style.visibility = "hidden";
    dropMenu1Step3.style.visibility = "visible";
});

dropMenu1Step3.addEventListener("change",(evt)=>{
    let selectedValue = dropMenu1Step3.value;
    if(selectedValue === "hPencil"){
        evt.target.style.visibility = "hidden";
        pencil1Step3.style.visibility = "visible";
        arr2Step3.style.visibility = "visible";
    }else{
        alert("Please select H Pencil");
    }
});

pencil1Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    png1Step3.style.visibility = "hidden";
    arr2Step3.style.visibility = "hidden";

    gif1Step3.style.visibility = "visible";

    setTimeout((evt) => {
        gif1Step3.style.visibility = "hidden";
        png2Step3.style.visibility = "visible";

        instruction1Step3.innerText = "Now, select 3H pencil";

        arr1Step3.style.visibility = "visible";
        trans2Step3.style.visibility = "visible";
    }, 10000)
});

trans2Step3.addEventListener("click",(evt) => {
    evt.target.style.visibility = "hidden";
    arr1Step3.style.visibility = "hidden";
    dropMenu2Step3.style.visibility = "visible";
});

dropMenu2Step3.addEventListener("change",(evt)=>{
    let selectedValue = dropMenu2Step3.value;
    if(selectedValue === "3hPencil"){
        evt.target.style.visibility = "hidden";
        pencil2Step3.style.visibility = "visible";
        arr2Step3.style.visibility = "visible";
    }else{
        alert("Please select 3H Pencil");
    }
});

pencil2Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    png2Step3.style.visibility = "hidden";
    arr2Step3.style.visibility = "hidden";

    gif2Step3.style.visibility = "visible";

    setTimeout((evt) => {
        gif2Step3.style.visibility = "hidden";
        png3Step3.style.visibility = "visible";

        instruction1Step3.innerText = "Now, select campass";

        arr3Step3.style.visibility = "visible";
        trans3Step3.style.visibility = "visible";
    }, 10000);
});

trans3Step3.addEventListener("click",(evt) => {
    evt.target.style.visibility = "hidden";
    arr3Step3.style.visibility = "hidden";
    comp1Step3.style.visibility = "visible";
    arr2Step3.style.visibility = "visible";
});

comp1Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr2Step3.style.visibility = "hidden";
    png3Step3.style.visibility = "hidden";

    gif3Step3.style.visibility = "visible";

    setTimeout(()=>{
        gif3Step3.style.visibility = "hidden";
        png4Step3.style.visibility = "visible";

        instruction1Step3.innerText = "Now, select protector and draw cuts";

        trans4Step3.style.visibility = "visible";
        arr4Step3.style.visibility = "visible";
    }, 5000);
});

trans4Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr4Step3.style.visibility = "hidden";

    protect1Step3.style.visibility = "visible";
    arr5Step3.style.visibility = "visible";
});

protect1Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr5Step3.style.visibility = "hidden";
    png4Step3.style.visibility = "hidden";

    gif4Step3.style.visibility = "visible";

    setTimeout(() => {
        gif4Step3.style.visibility = "hidden";
        png5Step3.style.visibility = "visible";

        instruction1Step3.innerText = "Now, select H pencil";
        trans5Step3.style.visibility = "visible";
        arr1Step3.style.visibility = "visible";
    }, 24000);
});

trans5Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr1Step3.style.visibility = "hidden";

    dropMenu3Step3.style.visibility = "visible";
});

dropMenu3Step3.addEventListener("change",(evt)=>{
    let selectedValue = dropMenu3Step3.value;
    if(selectedValue === "hPencil"){
        evt.target.style.visibility = "hidden";
        pencil3Step3.style.visibility = "visible";
        arr2Step3.style.visibility = "visible";
    }else{
        alert("Please select H Pencil");
    }
});

pencil3Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr2Step3.style.visibility = "hidden";
    png5Step3.style.visibility = "hidden";

    gif5Step3.style.visibility = "visible";

    setTimeout(() => {
        gif5Step3.style.visibility = "hidden";
        png6Step3.style.visibility = "visible";

        instruction1Step3.innerText = "Now, select 3H pencil";

        trans6Step3.style.visibility = "visible";
        arr1Step3.style.visibility = "visible";
    }, 10000);
});

trans6Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr1Step3.style.visibility = "hidden";

    dropMenu4Step3.style.visibility = "visible";
});

dropMenu4Step3.addEventListener("change",(evt)=>{
    let selectedValue = dropMenu4Step3.value;
    if(selectedValue === "3hPencil"){
        evt.target.style.visibility = "hidden";
        pencil4Step3.style.visibility = "visible";
        arr2Step3.style.visibility = "visible";
    }else{
        alert("Please select 3H Pencil");
    }
});

pencil4Step3.addEventListener("click", (evt)=> {
    evt.target.style.visibility = "hidden";
    arr2Step3.style.visibility = "hidden";
    png6Step3.style.visibility = "hidden";

    gif6Step3.style.visibility = "visible";

    setTimeout(() => {
        trans7Step3.style.visibility = "visible";
        arr2Step3.style.visibility =  "visible";
    }, 10000);
});

trans7Step3.addEventListener("click", (evt) =>{
    evt.target.style.visibility = "hidden";
    arr2Step3.style.visibility = "hidden";
    gif6Step3.style.visibility = "hidden";

    gif7Step3.style.visibility = "visible";

    setTimeout(() => {
        trans8Step3.style.visibility = "visible";
        arr2Step3.style.visibility =  "visible";
    }, 10000);
});

trans8Step3.addEventListener("click", (evt) =>{
    evt.target.style.visibility = "hidden";
    arr2Step3.style.visibility = "hidden";
    gif7Step3.style.visibility = "hidden";

    gif8Step3.style.visibility = "visible";

    setTimeout(() => {
        gif8Step3.style.visibility = "hidden";
        png7Step3.style.visibility =  "visible";

        instruction1Step3.innerText = "Now, select compass";

        trans9Step3.style.visibility = "visible";
        arr3Step3.style.visibility = "visible";
    }, 10000);
});

trans9Step3.addEventListener("click", (evt)=>{
    evt.target.style.visibility = "hidden";
    arr3Step3.style.visibility = "hidden";

    comp2Step3.style.visibility = "visible";
    arr2Step3.style.visibility = "visible";
});

comp2Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr2Step3.style.visibility = "hidden";
    png7Step3.style.visibility = "hidden";

    gif9Step3.style.visibility = "visible";

    setTimeout(() => {
        gif9Step3.style.visibility = "hidden";
        png8Step3.style.visibility = "visible";

        instruction1Step3.innerText = "Now, select H pencil";

        trans10Step3.style.visibility = "visible";
        arr1Step3.style.visibility = "visible";
    }, 15000);
});

trans10Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr1Step3.style.visibility = "hidden";

    dropMenu5Step3.style.visibility = "visible";
});

dropMenu5Step3.addEventListener("change",(evt)=>{
    let selectedValue = dropMenu5Step3.value;
    if(selectedValue === "hPencil"){
        evt.target.style.visibility = "hidden";
        pencil5Step3.style.visibility = "visible";
        arr2Step3.style.visibility = "visible";
    }else{
        alert("Please select H Pencil");
    }
});

pencil5Step3.addEventListener("click", (evt)=> {
    evt.target.style.visibility = "hidden";
    arr2Step3.style.visibility = "hidden";
    png8Step3.style.visibility = "hidden";

    gif10Step3.style.visibility = "visible";

    setTimeout(() => {
        trans11Step3.style.visibility = "visible";
        arr2Step3.style.visibility =  "visible";
    }, 9000);
});

trans11Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr2Step3.style.visibility = "hidden";
    gif10Step3.style.visibility = "hidden";

    gif11Step3.style.visibility = "visible";

    setTimeout(() => {
        trans12Step3.style.visibility = "visible";
        arr6Step3.style.visibility =  "visible";
    }, 9000);
});

trans12Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr6Step3.style.visibility = "hidden";
    gif11Step3.style.visibility = "hidden";

    gif12Step3.style.visibility = "visible";

    setTimeout(() => {
        trans13Step3.style.visibility = "visible";
        arr6Step3.style.visibility =  "visible";
    }, 9000);
});

trans13Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr6Step3.style.visibility = "hidden";
    gif12Step3.style.visibility = "hidden";

    gif13Step3.style.visibility = "visible";

    setTimeout(() => {
        nextToFinalPng.style.visibility = "visible";
        arrNext.style.visibility =  "visible";
    }, 9000);
});

nextToFinalPng.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arrNext.style.visibility = "hidden";
    gif13Step3.style.visibility = "hidden";
    assemblyBox.style.visibility = "hidden";

    finalPng.style.visibility = "visible";

    setTimeout(() => {
        nextBtnExp3.style.visibility = "visible";
        arrNext.style.visibility = "visible";
    }, 3000);
});

nextBtnExp3.addEventListener("click", (evt) => {
    parent.location = `../exp-list.html`;
});