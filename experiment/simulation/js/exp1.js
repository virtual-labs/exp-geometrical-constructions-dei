// STEP 1 

// VARIABLES;

const trans1Step1 = document.querySelector("#trans1-step1");
const dropMenu1Step1 = document.querySelector("#dropMenu1-step1");
const pencil1Step1 = document.querySelector("#pencil1-step1");

// once dom loaded then trans1Step1 will get activated.

addEventListener("DOMContentLoaded", () =>{
    trans1Step1.style.visibility = "visible";
    document.querySelector("#png1-step1").style.visibility = "visible";
});

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
    document.querySelector("#instructions-step1").innerText = "Now, Select compass and draw some lines!!";

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
        document.querySelector("#arr8-step1").style.visibility = "visible";
        tran5Step1.style.visibility = "visible";
    }, 5500);
});

const tran5Step1 = document.querySelector("#trans5-step1");

tran5Step1.addEventListener("click", (evt)=> {
    evt.target.style.visibility = "hidden";
    document.querySelector("#arr8-step1").style.visibility = "hidden";
    document.querySelector("#gif4-step1").style.visibility = "hidden";

    document.querySelector("#gif5-step1").style.visibility = "visible";

    setTimeout(()=>{
        document.querySelector("#arr9-step1").style.visibility = "visible";
        tran6Step1.style.visibility = "visible";
    }, 5500);
});

const tran6Step1 = document.querySelector("#trans6-step1");

tran6Step1.addEventListener("click", (evt)=> {
    evt.target.style.visibility = "hidden";
    document.querySelector("#arr9-step1").style.visibility = "hidden";
    document.querySelector("#gif5-step1").style.visibility = "hidden";

    document.querySelector("#gif6-step1").style.visibility = "visible";

    setTimeout(()=>{
        document.querySelector("#arr10-step1").style.visibility = "visible";
        tran7Step1.style.visibility = "visible";
    }, 5500);
});

const tran7Step1 = document.querySelector("#trans7-step1");

tran7Step1.addEventListener("click", (evt)=> {
    evt.target.style.visibility = "hidden";
    document.querySelector("#arr10-step1").style.visibility = "hidden";
    document.querySelector("#gif6-step1").style.visibility = "hidden";

    document.querySelector("#gif7-step1").style.visibility = "visible";

    setTimeout(()=>{
        document.querySelector("#gif7-step1").style.visibility = "hidden";
        document.querySelector("#png4-step1").style.visibility = "visible";
        document.querySelector("#arr1-step1").style.visibility = "visible";
        document.querySelector("#arr2-step1").style.visibility = "visible";
        document.querySelector("#instructions-step1").innerText = "Now, Select 3H pencil to draw parallel lines";
        tran8Step1.style.visibility = "visible";
    }, 5500);
});

const tran8Step1 = document.querySelector("#trans8-step1");
const dropMenu3Step1 = document.querySelector("#dropMenu3-step1");

tran8Step1.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    document.querySelector("#arr1-step1").style.visibility = "hidden";
    document.querySelector("#arr2-step1").style.visibility = "hidden";
    dropMenu3Step1.style.visibility = "visible";
    dropMenu2Step1.value = "default";
});

dropMenu3Step1.addEventListener("change",() => {
    let selectedValue = dropMenu3Step1.value;
    if(selectedValue === "3hPencil"){
        dropMenu3Step1.style.visibility = "hidden";
        pencil3Step1.style.visibility = "visible";
        document.querySelector("#arr4-step1").style.visibility = "visible";
    }else{
        alert("Please select 3H Pencil");
    }
});

const pencil3Step1 = document.querySelector("#pencil3-step1");

pencil3Step1.addEventListener("click", (evt)=>{
    evt.target.style.visibility = "hidden";
    document.querySelector("#arr4-step1").style.visibility = "hidden";
    document.querySelector("#png4-step1").style.visibility = "hidden";
    document.querySelector("#gif8-step1").style.visibility = "visible";

    setTimeout(()=>{
        tran9Step1.style.visibility = "visible";
        document.querySelector("#arr4-step1").style.visibility = "visible";
    }, 8000);
});

const tran9Step1 = document.querySelector("#trans9-step1");

tran9Step1.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    document.querySelector("#arr4-step1").style.visibility = "hidden";
    document.querySelector("#gif8-step1").style.visibility = "hidden";

    document.querySelector("#gif9-step1").style.visibility = "visible";

    setTimeout(()=> {
        tran10Step1.style.visibility = "visible";
        document.querySelector("#arr4-step1").style.visibility = "visible";
    }, 8000);
});

const tran10Step1 = document.querySelector("#trans10-step1");

tran10Step1.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    document.querySelector("#arr4-step1").style.visibility = "hidden";
    document.querySelector("#gif9-step1").style.visibility = "hidden";

    document.querySelector("#gif10-step1").style.visibility = "visible";

    setTimeout(()=> {
        tran11Step1.style.visibility = "visible";
        document.querySelector("#arr4-step1").style.visibility = "visible";
    }, 8000);
});

const tran11Step1 = document.querySelector("#trans11-step1");

tran11Step1.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    document.querySelector("#arr4-step1").style.visibility = "hidden";
    document.querySelector("#gif10-step1").style.visibility = "hidden";

    document.querySelector("#gif11-step1").style.visibility = "visible";

    setTimeout(()=> {
        tran12Step1.style.visibility = "visible";
        document.querySelector("#arr4-step1").style.visibility = "visible";
    }, 8000);
});

const tran12Step1 = document.querySelector("#trans12-step1");

tran12Step1.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    document.querySelector("#arr4-step1").style.visibility = "hidden";
    document.querySelector("#gif11-step1").style.visibility = "hidden";

    document.querySelector("#gif12-step1").style.visibility = "visible";

    setTimeout(()=> {
        tran13Step1.style.visibility = "visible";
        document.querySelector("#arr4-step1").style.visibility = "visible";
    }, 8000);
});

const tran13Step1 = document.querySelector("#trans13-step1");

tran13Step1.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    document.querySelector("#arr4-step1").style.visibility = "hidden";
    document.querySelector("#gif12-step1").style.visibility = "hidden";

    document.querySelector("#gif13-step1").style.visibility = "visible";

    setTimeout(()=> {
        nextBtnExp1.style.visibility = "visible";
        document.querySelector("#arr-next").style.visibility = "visible";
    }, 3500);
});

const nextBtnExp1 = document.querySelector("#nextToExpListFromExp1");

nextBtnExp1.addEventListener("click", () => {
    // parent.location = `../../html/exp-list.html`;
    parent.location = `../exp-list.html`;   // both of this addresses will work.

})