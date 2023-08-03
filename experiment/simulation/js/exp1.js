// THIS SINGLE FUNCTION WILL STOP THE setTimeOut Functions

// function myStopFuntion(){
//     clearTimeout(myTimeout);
// }

function showDropMenu1(){
    // document.querySelector("#png1-step1").style.visibility = "hidden";
    document.querySelector("#trans1-step1").style.visibility = "hidden";
    document.querySelector("#arr1-step1").style.visibility = "hidden";
    document.querySelector("#dropMenu1-step1").style.visibility = "visible";
}

const dropMenu1Step1 = document.querySelector("#dropMenu1-step1");
dropMenu1Step1.addEventListener("change",(evt)=>{
    let selectedValue = dropMenu1Step1.value;
    if(selectedValue === "2hPencil"){
        dropMenu1Step1.style.visibility = "hidden";
        document.querySelector("#pencil1-step1").style.visibility = "visible";
        document.querySelector("#arr2-step1").style.visibility = "visible";
    }else{
        alert("Please select 2H Pencil");
    }
});

document.querySelector("#pencil1-step1").addEventListener("click", (evt) => {
    document.querySelector("#gif1-step1").style.visibility = "visible";
    document.querySelector("#arr2-step1").style.visibility = "hidden";
    
    setTimeout((evt) => {
        // document.querySelector("#gif1-step1").style.visibility = "hidden";
        document.querySelector("#gif2-step1").style.visibility = "visible";
    }, 8000)
})
