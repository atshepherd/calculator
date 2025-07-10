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

let numButtons = document.querySelector(".num-buttons");
let buttonsChildren = numButtons.children;

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

for (let i = 0; i < buttonsChildren.length; i++) {
    buttonsChildren[i].addEventListener("mouseover", () => {
        buttonsChildren[i].style.backgroundColor = "black";
    });

    buttonsChildren[i].addEventListener("click", () => {
        if (num1 == 0) {
        num1 = buttonsChildren[i].textContent; 
        }   
        else num1 += buttonsChildren[i].textContent;
        display.textContent = num1;
    });
}

for (let i = 0; i < buttonsChildren.length; i++) {
    buttonsChildren[i].addEventListener("mouseout", () => {
        buttonsChildren[i].style.backgroundColor = "gray";
    });
}


/* num1 = +prompt("Please enter a number");
operator = prompt("Please enter an operator (+ , - , * , / )");
num2 = +prompt("Please enter another number");

operate(num1, num2, operator); */