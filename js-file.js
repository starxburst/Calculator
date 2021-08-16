function add(a, b){
    console.log(a + b);
}

function subtract(a, b){
    console.log(a - b);
}

function multiply(a, b){
    console.log(a * b);
}

function divide(a, b){
    console.log(a / b);
}

function operate(a, operand, b){
    if(operand == '+') add(a, b);
    else if (operand == '-') subtract(a, b);
    else if (operand == '*') multiply(a, b);
    else if (operand == '/') divide(a, b);
}