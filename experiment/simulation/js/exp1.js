// THIS SINGLE FUNCTION WILL STOP THE setTimeOut Functions

// function myStopFuntion(){
//     clearTimeout(myTimeout);
// }

// STEP 1 

// VARIABLES;

const trans1Step1 = document.querySelector("#trans1-step1");
const dropMenu1Step1 = document.querySelector("#dropMenu1-step1");
const pencil1Step1 = document.querySelector("#pencil1-step1");

// once dom loaded then trans1Step1 will get activated.

addEventListener("DOMContentLoaded", () => trans1Step1.style.visibility = "visible");

trans1Step1.addEventListener("click",() => {
    trans1Step1.style.visibility = "hidden";
    document.querySelector("#arr1-step1").style.visibility = "hidden";
    document.querySelector("#arr2-step1").style.visibility = "hidden";
    document.querySelector("#dropMenu1-step1").style.visibility = "visible";
});


// dropmenu 1 changes

dropMenu1Step1.addEventListener("change",(evt)=>{
    let selectedValue = dropMenu1Step1.value;
    if(selectedValue === "hPencil"){
        dropMenu1Step1.style.visibility = "hidden";
        document.querySelector("#pencil1-step1").style.visibility = "visible";
        document.querySelector("#arr3-step1").style.visibility = "visible";
    }else{
        alert("Please select H Pencil");
    }
});

// when first H Pencil was clicked 

pencil1Step1.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    document.querySelector("#png1-step1").style.visibility = "hidden";
    document.querySelector("#gif1-step1").style.visibility = "visible";
    document.querySelector("#arr3-step1").style.visibility = "hidden";

    setTimeout((evt) => {
        document.querySelector("#gif1-step1").style.visibility = "hidden";
        document.querySelector("#png2-step1").style.visibility = "visible";

        document.querySelector("#instructions-step1").innerText = "Now, Select 3H pencil and draw a line at any random angle";

        document.querySelector("#arr1-step1").style.visibility = "visible";
        document.querySelector("#arr2-step1").style.visibility = "visible";
        trans2Step1.style.visibility = "visible";
    }, 10000)
});

const trans2Step1 = document.querySelector("#trans2-step1");
const dropMenu2Step1 = document.querySelector("#dropMenu2-step1");
const pencil2Step1 = document.querySelector("#pencil2-step1");

trans2Step1.addEventListener("click", ()=> {
    trans2Step1.style.visibility = "hidden";
    document.querySelector("#arr2-step1").style.visibility = "hidden";
    document.querySelector("#arr1-step1").style.visibility = "hidden";
    dropMenu2Step1.style.visibility = "visible";
    dropMenu2Step1.value = "default";
});


dropMenu2Step1.addEventListener("change",() => {
    let selectedValue = dropMenu2Step1.value;
    if(selectedValue === "3hPencil"){
        dropMenu2Step1.style.visibility = "hidden";
        pencil2Step1.style.visibility = "visible";
        document.querySelector("#arr4-step1").style.visibility = "visible";
    }else{
        alert("Please select 3H Pencil");
    }
});

pencil2Step1.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    document.querySelector("#arr4-step1").style.visibility = "hidden";

    document.querySelector("#gif2-step1").style.visibility = "visible";

    setTimeout(() => {
    document.querySelector("#png3-step1").style.visibility = "visible";
    document.querySelector("#gif2-step1").style.visibility = "hidden";
    document.querySelector("#instructions-step1").innerText = "Now, Select compass";

    document.querySelector("#arr1-step1").style.visibility = "visible";
    document.querySelector("#arr5-step1").style.visibility = "visible";
    trans3Step1.style.visibility = "visible";
    }, 10000);
});


const trans3Step1 = document.querySelector("#trans3-step1");
const comp1Step1 = document.querySelector("#compass1-step1");

trans3Step1.addEventListener("click", ()=> {
    trans3Step1.style.visibility = "hidden";
    document.querySelector("#arr1-step1").style.visibility = "hidden";
    document.querySelector("#arr5-step1").style.visibility = "hidden";

    document.querySelector("#arr6-step1").style.visibility = "visible";
    comp1Step1.style.visibility = "visible";
});

comp1Step1.addEventListener("click", (evt)=>{
    evt.target.style.visibility = "hidden";
    document.querySelector("#arr6-step1").style.visibility = "hidden";

    document.querySelector("#gif3-step1").style.visibility = "visible";

    setTimeout(() => {
        tran4Step1.style.visibility = "visible";
        document.querySelector("#arr7-step1").style.visibility = "visible";
    }, 6000);
});

const tran4Step1 = document.querySelector("#trans4-step1");

tran4Step1.addEventListener("click", (evt)=> {
    evt.target.style.visibility = "hidden";
    document.querySelector("#arr7-step1").style.visibility = "hidden";
    document.querySelector("#gif3-step1").style.visibility = "hidden";

    document.querySelector("#gif4-step1").style.visibility = "visible";

    setTimeout(()=>{
        // document.querySelector("#arr8-step1").style.visibility = "visible";
        // tran5Step1.style.visibility = "visible";
    }, 6000);
});

// const tran5Step1 = document.querySelector("#trans5-step1");