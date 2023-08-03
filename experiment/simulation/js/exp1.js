// THIS SINGLE FUNCTION WILL STOP THE setTimeOut Functions

// function myStopFuntion(){
//     clearTimeout(myTimeout);
// }

// STEP 1 

// VARIABLES;

const trans1Step1 = document.querySelector("#trans1-step1");

addEventListener("DOMContentLoaded", () => trans1Step1.style.visibility = "visible");

trans1Step1.addEventListener("click",() => {
    trans1Step1.style.visibility = "hidden";
    document.querySelector("#arr1-step1").style.visibility = "hidden";
    document.querySelector("#arr2-step1").style.visibility = "hidden";
    document.querySelector("#dropMenu1-step1").style.visibility = "visible";
});

const dropMenu1Step1 = document.querySelector("#dropMenu1-step1");

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

const trans2Step1 = document.querySelector("#trans2-step1");

document.querySelector("#pencil1-step1").addEventListener("click", (evt) => {
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
    }, 8000)
});

const dropMenu2Step1 = document.querySelector("#dropMenu2-step1");

trans2Step1.addEventListener("click", ()=> {
    document.querySelector("#arr2-step1").style.visibility = "hidden";
    document.querySelector("#arr1-step1").style.visibility = "hidden";
    dropMenu2Step1.style.visibility = "visible";
    dropMenu2Step1.value = "default";
});

dropMenu2Step1.addEventListener("change",() => {
    let selectedValue = dropMenu2Step1.value;
    if(selectedValue === "3hPencil"){
        dropMenu2Step1.style.visibility = "hidden";
        document.querySelector("#pencil2-step1").style.visibility = "visible";
        document.querySelector("#arr4-step1").style.visibility = "visible";
    }else{
        alert("Please select 3H Pencil");
    }
});

document.querySelector("#pencil2-step1").addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    document.querySelector("#gif2-step1").style.visibility = "visible";
    document.querySelector("#arr4-step1").style.visibility = "hidden";
});
