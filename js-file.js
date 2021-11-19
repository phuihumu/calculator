const inDisplay = document.querySelector('.inDisplay');

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
})


function displayValue(event) {
    let value = event.target.innerText;
    inDisplay.textContent = value;
    return value;
}
