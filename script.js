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
const opp = ['+', '-', '*', '/'];

for (let i = 0; i < btn.length; i++) {

    const char = btn[i].textContent;

    btn[i].addEventListener('click', () => {

        if (firstNum === undefined) {
            if (char >= 0 && char <= 9) {
                firstNum = Number(char);
                scn.textContent = firstNum;
            }
        } else if (!opp.includes(char) && operator === undefined && char !== 'C') {
            firstNum = Number(`${firstNum}${char}`);
            scn.textContent = firstNum;
        }

        if (operator === undefined) {
            switch(char) {
                case '+':
                    operator = char;
                    scn.textContent = `${firstNum}${operator}`;
                    break
                case '-':
                    operator = char;
                    scn.textContent = `${firstNum}${operator}`;
                    break
                case '*':
                    operator = char;
                    scn.textContent = `${firstNum}${operator}`;
                    break
                case '/':
                    operator = char;
                    scn.textContent = `${firstNum}${operator}`;
                    break
            }   
        }

        if (operator && secondNum === undefined ) {
            if (char >= 0 && char <= 9) {
                secondNum = Number(char);
                scn.textContent = `${firstNum}${operator}${secondNum}`;
            }
        } else if (secondNum && (char !== '=') && !opp.includes(char)) {
            secondNum = Number(`${secondNum}${char}`);
            scn.textContent = `${firstNum}${operator}${secondNum}`;
        }

        if (operator && secondNum && opp.includes(char)) {
            firstNum = operate(firstNum, operator, secondNum);
            operator = char;
            secondNum = undefined;
            scn.textContent = `${firstNum}${char}`;
        }

        if (operator && char === '=') {
            firstNum = operate(firstNum, operator, secondNum);
            operator = secondNum = undefined;
            scn.textContent = `${firstNum}`;
        }

        if (char === 'C') {
            firstNum = operator = secondNum = undefined;
            scn.textContent = '';
        }

    });
}
