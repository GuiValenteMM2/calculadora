let firstNumber = "number1";
let secondNumber = "number2";
let operator = "operator";

const add = function(a, b) {
    return a + b;
};

const sub = function(a, b) {
    return a - b;
};

const multiply = function(a, b) {
    return a * b;
};

const divide = function(a, b) {
    return a / b;
};

const operate = function(firstNumber, operation, secondNumber) {
    let a = firstNumber;
    let b = secondNumber;
    if (operation == add) {
        return add(a, b);
    } 
    if (operation == sub) {
        return sub(a, b);
    }
    if (operation == multiply) {
        return multiply(a, b);
    }
    if (operation == divide) {
        return divide(a, b);
    } else {
        return "ERRO, ESCOLHA UMA OPERAÇÃO!";
    };
};