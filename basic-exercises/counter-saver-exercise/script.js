
let countEl = document.querySelector("#count-el");
let saveEl = document.querySelector("#save-el");
let count = 0 ;

const incrementBtn = document.querySelector("#increment-btn").addEventListener("click",increment);
const saveBtn = document.querySelector("#save-btn").addEventListener("click",save);
const decrementBtn = document.querySelector("#decrement-btn").addEventListener("click",decrement);

function increment(){
    count += 1;
    countEl.textContent = count;
}

function save(){
    let countStr = count + " / ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}

function decrement() {
    count -= 1;
    countEl.textContent = count;
}