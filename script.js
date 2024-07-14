console.log("Welcome to the calculator!")

function add (number1, number2) {
    return number1 + number2;
}

function substract (number1, number2) {
    return number1 - number2;
}

function multiply (number1, number2) {
    return number1 * number2;
}

function divide (number1, number2) {
    if (number2 === 0) {return "Error: bro tried to divide by zero xD";} //number not 0
    return number1 / number2;
}


function validateNumber (number) { //true if good
    return typeof number === "number" ? true : false; 
}

function validateOperator (operator) { //true if good
    return ["+", "-", "*", "/"].includes(operator);
}


function operate (number1, number2, operator) {
    if (!validateNumber(number1)) {return `number 1: "${number1}" not valid input!`}
    if (!validateNumber(number2)) {return `number 2: "${number2}" not valid input!`}
    if (!validateOperator(operator)) { return `Operator: "${operator}" not valid input!`}

    if (operator === "+") {
        return add(number1, number2);
    } else if (operator === "-") {
        return substract(number1, number2);
    } else if (operator === "*") {
        return multiply(number1, number2);
    } else if (operator === "/") {
        return divide(number1, number2);
    }
    return "ERROR: Operator function reached end without result!"
}


const numberButtons = [
    document.querySelector("#zeroButton"), 
    document.querySelector("#oneButton"), 
    document.querySelector("#twoButton"), 
    document.querySelector("#threeButton"), 
    document.querySelector("#fourButton"), 
    document.querySelector("#fiveButton"), 
    document.querySelector("#sixButton"), 
    document.querySelector("#sevenButton"), 
    document.querySelector("#eightButton"), 
    document.querySelector("#nineButton")
]

for (let index = 0; index < 10; index++) {
    numberButtons[index].addEventListener("click", () => console.log(index))
}


const otherButtons = {
    caButton: document.querySelector("#caButton"),
    delButton: document.querySelector("#delButton"),
    equalButton: document.querySelector("#equalButton"),
    plusButton: document.querySelector("#plusButton"),
    substractButton: document.querySelector("#substractButton"),
    multiplyButton: document.querySelector("#multiplyButton"),
    divideButton: document.querySelector("#divideButton"),
};

function handleButtonPress (buttonPressed) {
    console.log(buttonPressed)
}


let value1
let value2
let operator

console.log(otherButtons)