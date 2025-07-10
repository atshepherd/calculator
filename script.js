function operate(num1, num2, operator) {
    switch(operator) {
        case "+": 
            add(num1, num2);
            break;
        case "-": 
            subtract(num1, num2);
            break;
        case "*": 
            multiply(num1, num2);
            break;
        case "/": 
            divide(num1, num2);
            break;
    }
}

function add(num1, num2) {
    total = num1 + num2;
    console.log(total);
}

function subtract(num1, num2) {
    total = num1 - num2;
    console.log(total); 
}

function multiply(num1, num2) {
    total = num1 * num2;
    console.log(total);
}

function divide(num1, num2) {
    total = num1 / num2;
    console.log(total);
}

let total = 0;
let num1 = 0;
let num2 = 0;
let operator = "";

let parent = document.querySelector(".num-buttons");
let children = parent.children;

let display = document.querySelector(".display");

let clearButton= document.querySelector(".clear");
    clearButton.addEventListener("click", () => {
        num1 = 0;
        display.textContent = "";
    });

let deleteButton = document.querySelector(".del");

    deleteButton.addEventListener("click", () => {
        num1 = display.textContent.slice(0, -1);
        display.textContent = num1;
    });

for (let i = 0; i < children.length; i++) {
    children[i].addEventListener("mouseover", () => {
        children[i].style.backgroundColor = "black";
    });
    children[i].addEventListener("click", () => {
        if (num1 == 0) {
           num1 = children[i].textContent; 
        }
        else num1 += children[i].textContent;
        display.textContent = num1;
    });
}

for (let i = 0; i < children.length; i++) {
    children[i].addEventListener("mouseout", () => {
        children[i].style.backgroundColor = "gray";
    });
}


/* num1 = +prompt("Please enter a number");
operator = prompt("Please enter an operator (+ , - , * , / )");
num2 = +prompt("Please enter another number");

operate(num1, num2, operator); */