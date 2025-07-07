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

num1 = +prompt("Please enter a number");
operator = prompt("Please enter an operator (+ , - , * , / )");
num2 = +prompt("Please enter another number");

operate(num1, num2, operator);