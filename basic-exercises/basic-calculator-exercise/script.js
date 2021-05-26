let num1 = 3;
let num2 = 8;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

let addBtn = document.querySelector("#add").addEventListener("click",add);
let subtractBtn = document.querySelector("#subtract").addEventListener("click",subtract);
let divideBtn = document.querySelector("#divide").addEventListener("click",divide);
let multiplyBtn = document.querySelector("#multiply").addEventListener("click",multiply);

let sumEl = document.querySelector("#sum-el");


function add () {
    sumEl.textContent = "Sum: " + (num1 + num2);
}

function subtract () {
    sumEl.textContent = "Sum: " + (num1 - num2);
}

function divide () {
    sumEl.textContent = "Sum: " + (num1 * num2);
}

function multiply () {
    sumEl.textContent = "Sum: " + (num1 / num2);
}