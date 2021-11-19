const inDisplay = document.querySelector('.inDisplay');
const opDisplay = document.querySelector('.opDisplay');
let currentValue;
let prevValue;
let operation;

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

function operate(operator, num1, num2)
{
    let result;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
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
    prevValue = currentValue;
    operation = event.target.innerText;
    opDisplay.textContent = prevValue + " " + operation;
}

function displayValue(event) {
    currentValue = event.target.innerText;
    inDisplay.textContent = currentValue;
    return currentValue;
}

const equalButton = document.querySelector('#equal');
equalButton.addEventListener('click', () => {
    if (operation === null || prevValue === null || currentValue === null)
    {
        
    }
    else {
        let result = operate(operation,prevValue,currentValue);
        opDisplay.textContent = prevValue + " " + operation + " " + currentValue + " ="
        currentValue = result;
        inDisplay.textContent = result;
    }

});