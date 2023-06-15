const add = function(a, b) {
    return parseInt(a) + parseInt(b);
};

const sub = function(a, b) {
    return parseInt(a) - parseInt(b);
};

const multiply = function(a, b) {
    return parseInt(a) * parseInt(b);
};

const divide = function(a, b) {
    return parseInt(a) / parseInt(b);
};

const operate = function (a, op, b) {
    if ( op === '+') {
        return add(a, b);
    }
    if (op === '-') {
        return sub(a, b);
    }
    if (op === '*') {
        return multiply(a, b);
    }
    if (op === '/') {
        return divide(a, b);
    }
};

const displayValue = document.querySelector('#display');

const pressedKeys = [];

const pressedKeysObject = function (firstNumber, operator, secondNumber) {
    this.firstNumber = firstNumber;
    this.operator = operator;
    this.secondNumber = secondNumber;
    pressedKeys.push(pressedKeysObject);
}

const storeValue = function (el) {
    let pressedKey1 = el.value;
    let pressedKey2 = el.value;
    let pressedKey3 = el.value;
    return pressedKeysObject(pressedKey1, pressedKey2, pressedKey3)
};

console.log(pressedKeys);

