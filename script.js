function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let firstNum;
let secondNum;
let operator;

function operate(num1, sym, num2) {
    if (sym === '+') {
        return add(num1, num2);
    } else if (sym === '-') {
        return subtract(num1, num2);
    } else if (sym === '*') {
        return multiply(num1, num2);
    } else if (sym === '/') {
        return divide(num1, num2);
    }
}
