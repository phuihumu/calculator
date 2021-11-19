const inDisplay = document.querySelector('.inDisplay');
const opDisplay = document.querySelector('.opDisplay');
let currentValue;
let prevValue;
let operation;
let operationPressed = true;
let equalPressed = false;
let dotPressed = false;
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
    return num1/num2;
}

function modulo(num1, num2) {
    return num1%num2;
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
    else if (operator === "/")
    {
        result = divide(num1,num2);
    }
    else {
        result = modulo(num1,num2);
    }
    if (result % 1 != 0)
    {    
        result = result.toFixed(3);
    }
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

const decimal = document.querySelector('.decimal');
decimal.addEventListener('click', () => {
    if (!dotPressed)
    {
        displayValue(event);
        dotPressed = true;
    }
});

const signButton = document.querySelector('.sign');
signButton.addEventListener('click', () => {
    if (numOfArgs >= 1)
    {
        if (Math.sign(currentValue) === 1)
        {
            currentValue = -Math.abs(currentValue);
        }
        else
        {
            currentValue = Math.abs(currentValue);
        } 
        inDisplay.textContent = currentValue;
    }
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
        dotPressed = false;
    }
}

function displayValue(event) {
    currentValue = event.target.innerText;
    numOfArgs++;
    if (operationPressed || equalPressed)
    {
        inDisplay.textContent = currentValue;
    }
    else {
        inDisplay.textContent = inDisplay.textContent.concat(currentValue);
    }
    operationPressed = false;
    equalPressed = false;
    currentValue = inDisplay.textContent;
}

const equalButton = document.querySelector('#equal');
equalButton.addEventListener('click', () => {
    if (numOfArgs >= 2) {
        equalPressed = true;
        let result = operate(operation,prevValue,currentValue);
        opDisplay.textContent = prevValue + " " + operation + " " + currentValue + " ="
        currentValue = result;
        prevValue = null;
        inDisplay.textContent = result;
        dotPressed = false;
        numOfArgs = 1;
    }

});

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
    currentValue,prevValue,operation = null;
    operationPressed = true;
    dotPressed = false;
    numOfArgs = 0;
    opDisplay.textContent = null;
    inDisplay.textContent = 0;
})