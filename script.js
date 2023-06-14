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

const numbersValues = {'firstNumber' : '' , 'operator' : '', 'secondNumber' : ''};
const displayValue = document.querySelector('#display');

const storeValue = function (el) {
    let pressedKey = el.value;
    console.log(pressedKey);
};



