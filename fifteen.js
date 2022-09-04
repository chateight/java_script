// event handler & listenner

//
// basic syntax
//
const btn = document.querySelector(".button");
btn.onclick = function( event ){
    console.log("pushed");
    alert("alert!");
}

// exer 15.1　--- div area color change when mouse on
const tgt = document.querySelector("#target");
tgt.onmouseenter = function (){
    tgt.style.background = "red";
}

tgt.onmouseleave = function (){
    tgt.style.background = "none";
}

// event listener up/down the number
let count = 0;
const number = document.querySelector(".number");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");

const funcA = function(event){
    tgt.style.background = "blue";
}

plus.addEventListener("click", function(event){     // in this case, event object is not used so you can omit this argument
    count++;
    number.textContent = count;
})

minus.addEventListener("click", function(event){
    count--;
    number.textContent = count;
})
minus.addEventListener("click", funcA)          // event listener allows multiple funtion for the event


