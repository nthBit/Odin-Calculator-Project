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

function operate(num1, symbol, num2) {
    if (symbol === '+') {
        return add(num1, num2);
    } else if (symbol === '-') {
        return subtract(num1, num2);
    } else if (symbol === '*') {
        return multiply(num1, num2);
    } else if (symbol === '/') {
        return divide(num1, num2);
    }
}

const buttonNodeList = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const operatorArray = ['+', '-', '*', '/'];

function firstNumFirstChar(char) {
    if (char >= '0' && char <= '9') {
        firstNum = char;
        screen.textContent = firstNum;
    }
}

function firstNumSecondChar(char) {
    if (char >= '0' && char <= '9') {
        firstNum = `${firstNum}${char}`;
        screen.textContent = firstNum;
    } else if (char === '.') {
        const dotFirst = String(firstNum).split('');
        if (!dotFirst.includes('.')) {
            firstNum = `${dotFirst.join('')}${'.'}`;
            screen.textContent = firstNum;
        } else {
            screen.textContent = firstNum;
        }
    }
}

function selectOperator(char) {
    switch(char) {
        case '+':
            operator = char;
            screen.textContent = `${firstNum}${operator}`;
            break
        case '-':
            operator = char;
            screen.textContent = `${firstNum}${operator}`;
            break
        case '*':
            operator = char;
            screen.textContent = `${firstNum}${operator}`;
            break
        case '/':
            operator = char;
            screen.textContent = `${firstNum}${operator}`;
            break
    }   
}

function secondNumFirstChar(char) {
    if (char >= '0' && char <= '9') {
        secondNum = char;
        screen.textContent = `${firstNum}${operator}${secondNum}`;
    }
}

function secondNumDecimal(char) {
    const dotSecond = String(secondNum).split('');
    if (!dotSecond.includes('.')) {
        secondNum = `${dotSecond.join('')}${'.'}`;
        screen.textContent = `${firstNum}${operator}${secondNum}`;
    } else {
        screen.textContent = `${firstNum}${operator}${secondNum}`;
    }
}

function secondNumSecondChar(char) {
    secondNum = `${secondNum}${char}`;
    screen.textContent = `${firstNum}${operator}${secondNum}`;
}

function partialCalculation(char) {
    firstNum = operate(Number(firstNum), operator, Number(secondNum));
    operator = char;
    secondNum = undefined;
    screen.textContent = `${firstNum}${char}`;
}

function fullCalculation(char) {
    if (secondNum === '0') {
        firstNum = operator = secondNum = undefined;
        screen.textContent = 'dun b dum';
    } else {
        firstNum = operate(Number(firstNum), operator, Number(secondNum));
        operator = secondNum = undefined;
        screen.textContent = `${firstNum}`;
    }
}

function clearScreen(char) {
    firstNum = operator = secondNum = undefined;
    screen.textContent = '';
}

function backspace(char) {
    if (secondNum !== undefined) {
        const secondNumArr = String(secondNum).split('');
        secondNumArr.pop();
        secondNum = secondNumArr.join('');

        if (secondNum) {
            screen.textContent = `${firstNum}${operator}${secondNum}`;
        } else {
            secondNum = undefined;
            screen.textContent = `${firstNum}${operator}`;
        }

    } else if (operator !== undefined) {
        operator = undefined;
        screen.textContent = `${firstNum}`;

    } else if (firstNum !== undefined) {
        const firstNumArr = String(firstNum).split('');
        firstNumArr.pop();
        firstNum = firstNumArr.join('');

        if (firstNum) {
            screen.textContent = `${firstNum}`;
        } else {
            firstNum = undefined;
            screen.textContent = '';
        }
    }
}

for (let i = 0; i < buttonNodeList.length; i++) {

    let char = buttonNodeList[i].textContent;

    buttonNodeList[i].addEventListener('click', () => {

        // firstNum
        if (firstNum === undefined) {
            firstNumFirstChar(char);
        } else if (!operatorArray.includes(char) && (operator === undefined) && (char !== 'C') && (char !== 'D')) {
            firstNumSecondChar(char);
        }

        // operator
        if (operator === undefined) {
            selectOperator(char);
        }

        // secondNum
        if (operator && secondNum === undefined) {
            secondNumFirstChar(char);
        } else if (secondNum && char === '.') {
            secondNumDecimal(char);
        } else if (secondNum && (char !== '=') && !operatorArray.includes(char) && (char !== 'D')) {
            secondNumSecondChar(char);
        }

        // sum last two nums
        if (operator && secondNum && operatorArray.includes(char)) {
            partialCalculation(char);
        }

        // equals and divide by 0
        if (operator && (char === '=')) {
            fullCalculation(char);
        }

        // clear
        if (char === 'C') {
            clearScreen(char);
        }

        // backspace
        if (char === 'D') {
            backspace(char);
        }

    });
}



document.addEventListener('keydown', (event) => {

    const key = event.key;

    // ignores the shift key
    if (event.key === 'Shift') return;

    // firstNum
    if (firstNum === undefined) {
        firstNumFirstChar(key);
    } else if (!operatorArray.includes(key) && (operator === undefined) && (key !== 'C') && (key !== 'D')) {
        firstNumSecondChar(key);
    }

        // operator
    if (operator === undefined) {
        selectOperator(key);
    }

    // secondNum
    if (operator && secondNum === undefined) {
        secondNumFirstChar(key);
    } else if (secondNum && key === '.') {
        secondNumDecimal(key);
    } else if (secondNum && (key !== '=') && !operatorArray.includes(key) && (key !== 'D')) {
        secondNumSecondChar(key);
    }

    // sum last two nums
    if (operator && secondNum && operatorArray.includes(key)) {
        partialCalculation(key);
    }

    // equals and divide by 0
    if (operator && (key === '=')) {
        fullCalculation(key);
    }

    // clear
    if (key === 'C') {
        clearScreen(key);
    }

    // backspace
    if (key === 'D') {
        backspace(key);
    }

});
