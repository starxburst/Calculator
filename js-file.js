function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(a, operand, b){
    a = Number(a);
    b = Number(b);
    switch(operand) {
        case '+':
            answer = add(a, b);
            break;
        case '-':
            answer = subtract(a, b);
            break;
        case '*':
            answer = multiply(a, b);
            break;
        case '÷':
            answer = divide(a, b);
            break;
    }
}

displayValue = '';
subDisplayValue = '';
firstValue = 0;
secondValue = 0;
operand = '';
answer = 0;
isOperandEntered = false;

const btnNumbers = document.querySelectorAll('.number');
const display = document.querySelector('#display');
btnNumbers.forEach(btnNumber => btnNumber.addEventListener('click', populateDisplay));

function populateDisplay(e) {
    displayValue = displayValue + e.target.textContent;
    display.textContent = displayValue;
}

const btnOperands = document.querySelectorAll('.operand');
btnOperands.forEach(btnOperand => btnOperand.addEventListener('click', nextValue));

function nextValue(e) {
    const subDisplay = document.querySelector('#subDisplay');
    if (isOperandEntered) {
        secondValue = displayValue;
        operate(firstValue, operand, secondValue);
        operand = e.target.textContent;
        subDisplay.textContent = answer + operand;
        firstValue = answer;
        secondValue = 0;
        displayValue = '';
        display.textContent = displayValue;
    } else {
    firstValue = displayValue;
    operand = e.target.textContent;
    subDisplayValue = firstValue + operand;
    subDisplay.textContent = subDisplayValue;
    displayValue = '';
    isOperandEntered = true;
    }
}

//Calculate the answers
const equal = document.querySelector('#equal');
equal.addEventListener('click', calculateAnswer);

function calculateAnswer() {
    secondValue = displayValue;
    operate(firstValue, operand, secondValue);
    display.textContent = answer;
}

//Clear button
const clear = document.querySelector('#clear');
clear.addEventListener('click', clearCalculator);

function clearCalculator() {
    displayValue = '';
    subDisplayValue = '';
    firstValue = 0;
    secondValue = 0;
    operand = '';
    answer = 0;
    isOperandEntered = false;
    display.textContent = displayValue;
    subDisplay.textContent = subDisplayValue;
}

//Delete button
const deleteNumber = document.querySelector('#delete');
deleteNumber.addEventListener('click', deleteCalculatorNumber);

function deleteCalculatorNumber() {
    if (display.textContent != '') {
        displayValue = display.textContent.slice(0, -1);
        display.textContent = displayValue;
    }
}