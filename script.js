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
let operator;
let secondNum;

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

const btn = document.querySelectorAll('.btn');
const scn = document.querySelector('.screen');

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', () => {

        if (firstNum === undefined) {
            if (btn[i].textContent >= 0 && btn[i].textContent <= 9) {
                firstNum = btn[i].textContent;
                scn.textContent = firstNum;
            }
        }

        if (operator === undefined) {
            switch(btn[i].textContent) {
                case '+':
                    operator = btn[i].textContent;
                    scn.textContent = `${firstNum}${operator}`;
                    break
                case '-':
                    operator = btn[i].textContent;
                    scn.textContent = `${firstNum}${operator}`;
                    break
                case '*':
                    operator = btn[i].textContent;
                    scn.textContent = `${firstNum}${operator}`;
                    break
                case '/':
                    operator = btn[i].textContent;
                    scn.textContent = `${firstNum}${operator}`;
                    break
            }   
        }

        if (firstNum && operator) {
            if (btn[i].textContent >= 0 && btn[i].textContent <= 9) {
                secondNum = btn[i].textContent;
                scn.textContent = `${firstNum}${operator}${secondNum}`;
            }
        }
    });
}