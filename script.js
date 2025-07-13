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
    total = +num1 + +num2;
    display.textContent = total;
}

function subtract(num1, num2) {
    total = +num1 - +num2;
    display.textContent = total; 
}

function multiply(num1, num2) {
    total = +num1 * +num2;
    display.textContent = total; 
}

function divide(num1, num2) {
    total = +num1 / +num2;
    display.textContent = total; 
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
    num2 = 0;
    total = 0;
    operator = "";
    display.textContent = "";
});

let deleteButton = document.querySelector(".del");

deleteButton.addEventListener("click", () => {
    if (operator == "") {
        num1 = display.textContent.slice(0, -1);
        display.textContent = num1;  
    }
    
    else {
        num2 = display.textContent.slice(0, -1);
        display.textContent = num2;
    }

});

for (let i = 0; i < buttonsChildren.length; i++) {
    buttonsChildren[i].addEventListener("mouseover", () => {
        buttonsChildren[i].style.backgroundColor = "black";
    });
}
// add colors when hovered over

for (let i = 0; i < buttonsChildren.length; i++) {
    buttonsChildren[i].addEventListener("mouseout", () => {
        buttonsChildren[i].style.backgroundColor = "gray";
    });
}
// remove colors when hovered over


for (let i = 0; i < buttonsChildren.length; i++) {
    buttonsChildren[i].addEventListener("click", () => {
        // if total is 0, and input is a number, and operator is empty, assign to num1
        if ((buttonsChildren[i].textContent == "+" || buttonsChildren[i].textContent == "-" || buttonsChildren[i].textContent == "*" || buttonsChildren[i].textContent == "/") && num1 != 0) {
            operator = buttonsChildren[i].textContent;
        }
        else if ((buttonsChildren[i].textContent == "1" || buttonsChildren[i].textContent == "2" || buttonsChildren[i].textContent == "3" || buttonsChildren[i].textContent == "4" || buttonsChildren[i].textContent == "5" || buttonsChildren[i].textContent == "6" || buttonsChildren[i].textContent == "7" || buttonsChildren[i].textContent == "8" || buttonsChildren[i].textContent == "9" || buttonsChildren[i].textContent == "0" || buttonsChildren[i].textContent == ".") && operator == "") {
            if (num1 == 0) {
                num1 = buttonsChildren[i].textContent;
                display.textContent = num1;
            }

            else {
                num1 += buttonsChildren[i].textContent;
                display.textContent = num1;
            }
        }
        // assign input to num1

        else if ((buttonsChildren[i].textContent == "1" || buttonsChildren[i].textContent == "2" || buttonsChildren[i].textContent == "3" || buttonsChildren[i].textContent == "4" || buttonsChildren[i].textContent == "5" || buttonsChildren[i].textContent == "6" || buttonsChildren[i].textContent == "7" || buttonsChildren[i].textContent == "8" || buttonsChildren[i].textContent == "9" || buttonsChildren[i].textContent == "0" || buttonsChildren[i].textContent == ".") && operator != "") {
            if (num2 == 0) {
                num2 = buttonsChildren[i].textContent;
                display.textContent = num2;
            }

            else {
                num2 += buttonsChildren[i].textContent;
                display.textContent = num2;
            }
        }
        // assign input to num2

        else if (buttonsChildren[i].textContent == "=") {
            operate(num1, num2, operator);
            num1 = total;
            num2 = 0;
        }
        // operate if equals sign is clicked
        
        console.log(`operator: ${operator}`); // debug
        console.log(`num1: ${num1}`); // debug
        console.log(`num2: ${num2}`); // debug
        console.log(`total: ${total}`); // debug
    });
}
// assign input to num1





/* num1 = +prompt("Please enter a number");
operator = prompt("Please enter an operator (+ , - , * , / )");
num2 = +prompt("Please enter another number");

operate(num1, num2, operator); */