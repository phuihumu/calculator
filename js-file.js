const inDisplay = document.querySelector('.inDisplay');
const opDisplay = document.querySelector('.opDisplay');
let currentValue;
let prevValue;
let operation;
let operationPressed = true;
let numOfArgs = 0;

/* Base calculator functions */

function add(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
	return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    let product = num1/num2;
    return product;
}

function operate(operator, num1, num2)
{
    let result;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if (operator === "+")
    {
        result = add(num1,num2);
    }
    else if (operator === "-")
    {
        result = sub(num1,num2);
    }
    else if (operator === "*")
    {
        result = multiply(num1,num2);
    }
    else {
        result = divide(num1,num2);
    }
    result = result.toFixed(4);
    return result;
}

const numButton = document.querySelectorAll('.num');
numButton.forEach((numButton)=> {
    numButton.addEventListener('click', displayValue);
});

const operatorButton = document.querySelectorAll('.function');
operatorButton.forEach((operatorButton)=> {
    operatorButton.addEventListener('click', getOperator)
});

function getOperator(event) {
    if (numOfArgs >= 1)
    {
        if (prevValue != null)
        {
            let result = operate(operation, prevValue, currentValue);
            prevValue = result;
            inDisplay.textContent = result;
        }
        else {
            prevValue = currentValue;
        }
        operation = event.target.innerText;
        opDisplay.textContent = prevValue + " " + operation;
        operationPressed = true;
    }
}

function displayValue(event) {
    currentValue = event.target.innerText;
    numOfArgs++;
    if (operationPressed)
    {
        inDisplay.textContent = currentValue;
    }
    else {
        inDisplay.textContent = inDisplay.textContent.concat(currentValue);
    }
    operationPressed = false;
    currentValue = inDisplay.textContent;
}

const equalButton = document.querySelector('#equal');
equalButton.addEventListener('click', () => {
    if (numOfArgs >= 2) {
        let result = operate(operation,prevValue,currentValue);
        opDisplay.textContent = prevValue + " " + operation + " " + currentValue + " ="
        currentValue = result;
        prevValue = null;
        inDisplay.textContent = result;
        numOfArgs = 1;
    }

});

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
    currentValue,prevValue,operation = null;
    operationPressed = true;
    numOfArgs = 0;
    opDisplay.textContent = null;
    inDisplay.textContent = 0;
})