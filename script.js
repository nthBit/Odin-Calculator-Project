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

        // firstNum
        if (firstNum === undefined) {
            if (char >= '0' && char <= '9') {
                firstNum = char;
                scn.textContent = firstNum;
            }
        } else if (!opp.includes(char) && (operator === undefined) && (char !== 'C') && (char !== 'D')) {
            if (char >= '0' && char <= '9') {
                firstNum = `${firstNum}${char}`;
                scn.textContent = firstNum;
            } else if (char === '.') {
                const dotFirst = String(firstNum).split('');
                if (!dotFirst.includes('.')) {
                    firstNum = `${dotFirst.join('')}${'.'}`;
                    scn.textContent = firstNum;
                } else {
                    scn.textContent = firstNum;
                }
            }
        }

        // operator
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

        // secondNum
        if (operator && secondNum === undefined) {
            if (char >= '0' && char <= '9') {
                secondNum = char;
                scn.textContent = `${firstNum}${operator}${secondNum}`;
            }
        } else if (secondNum && char === '.') {
                const dotSecond = String(secondNum).split('');
                if (!dotSecond.includes('.')) {
                    secondNum = `${dotSecond.join('')}${'.'}`;
                    scn.textContent = `${firstNum}${operator}${secondNum}`;
                } else {
                    scn.textContent = `${firstNum}${operator}${secondNum}`;
                }
            } else if (secondNum && (char !== '=') && !opp.includes(char) && (char !== 'D')) {
            secondNum = `${secondNum}${char}`;
            scn.textContent = `${firstNum}${operator}${secondNum}`;
        } 

        // sum last two nums
        if (operator && secondNum && opp.includes(char)) {
            firstNum = operate(Number(firstNum), operator, Number(secondNum));
            operator = char;
            secondNum = undefined;
            scn.textContent = `${firstNum}${char}`;
        }

        // equals and divide by 0
        if (operator && (char === '=')) {
            if (secondNum === '0') {
                firstNum = operator = secondNum = undefined;
                scn.textContent = 'dun b dum';
            } else {
                firstNum = operate(Number(firstNum), operator, Number(secondNum));
                operator = secondNum = undefined;
                scn.textContent = `${firstNum}`;
            }
        }

        // clear
        if (char === 'C') {
            firstNum = operator = secondNum = undefined;
            scn.textContent = '';
        }


        // backspace
        if (char === 'D') {

            if (secondNum !== undefined) {
                const secondNumArr = String(secondNum).split('');
                secondNumArr.pop();
                secondNum = secondNumArr.join('');

                if (secondNum) {
                    scn.textContent = `${firstNum}${operator}${secondNum}`;
                } else {
                    secondNum = undefined;
                    scn.textContent = `${firstNum}${operator}`;
                }

            } else if (operator !== undefined) {
                operator = undefined;
                scn.textContent = `${firstNum}`;

            } else if (firstNum !== undefined) {
                const firstNumArr = String(firstNum).split('');
                firstNumArr.pop();
                firstNum = firstNumArr.join('');

                if (firstNum) {
                    scn.textContent = `${firstNum}`;
                } else {
                    firstNum = undefined;
                    scn.textContent = '';
                }
            }
        }

    });
}
