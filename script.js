console.log("Welcome to the calculator!")

function add (number1, number2) {
    return number1 + number2;
}

function subtract (number1, number2) {
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
    return !isNaN(number); 
}

function validateOperator (operator) { //true if good
    return [PLUS, SUBTRACT, MULTIPLY, DIVIDE].includes(operator);
}


function operate (number1, number2, operator) {
    if (number1 === "") {return "ERROR: number1 empty"}
    if (number2 === "") {return "ERROR: number2 empty"}
    [number1, number2] = [+number1, +number2]
    if (!validateNumber(number1)) {return `ERROR: number 1: "${number1}" not valid input!`}
    if (!validateNumber(number2)) {return `ERROR: number 2: "${number2}" not valid input!`}
    if (!validateOperator(operator)) { return `Operator: "${operator}" not valid input!`}

    if (operator === PLUS) {
        return add(number1, number2);
    } else if (operator === SUBTRACT) {
        return subtract(number1, number2);
    } else if (operator === MULTIPLY) {
        return multiply(number1, number2);
    } else if (operator === DIVIDE) {
        return divide(number1, number2);
    }
    return "ERROR: Operator function reached end without result!"
}


function connectButtons() {
    Array.from(document.querySelectorAll("button")).forEach(button => {
            button.addEventListener("click", () => handleButtonPress(button.textContent))
        })
}

function clear() {
    number1 = EMPTY_STRING
    number2 = EMPTY_STRING
    operator = EMPTY_STRING
    result = EMPTY_STRING
    active = NUMBER_1

    infoDisplay.textContent = ZERO_WIDTH_SPACE
    mainDisplay.textContent = ZERO_WIDTH_SPACE
    console.log("Clear")
}

function handleButtonPress (buttonPressed) {
    if (isNaN(+result) || buttonPressed === CA) { //is clear all
        clear()
    }
    
    if (buttonPressed === DEL) { //is DEL
        if (active === NUMBER_1) {
            number1 = number1.slice(0, number1.length - 1)
        } else if (active === OPERATOR || number2 === EMPTY_STRING) {
            operator = EMPTY_STRING
            active = NUMBER_1
        } else if (active === NUMBER_2) {
            number2 = number2.slice(0, number2.length - 1)
        } else if (active === RESULT) {
            active = NUMBER_1
            number1 = result.slice(0, result.length - 1)
            operator = EMPTY_STRING
            number2 = EMPTY_STRING
            result = EMPTY_STRING
        }  else {
            console.log("Alert: DEL button handling error")
        }
    } else if (buttonPressed === DECIMAL_POINT) { //is decimal point
        if (active === NUMBER_1 && !number1.includes(DECIMAL_POINT)) { //is number1Active and number1 not already floating point
            number1 += buttonPressed
        } else if ((active === NUMBER_2 || active === OPERATOR) && !number2.includes(DECIMAL_POINT)){ 
            active = NUMBER_2
            number2 += buttonPressed
        } else if (active === RESULT && !result.includes(DECIMAL_POINT)) {
            active = NUMBER_1
            number1 = result + buttonPressed
            operator = EMPTY_STRING
            number2 = EMPTY_STRING
            result = EMPTY_STRING
        } else {
            console.log("Alert: Decimal point handling error")
        }
    } else if (validateNumber(+buttonPressed)) { //is number
        if (active === NUMBER_1) { //is number1
            number1 += buttonPressed
        } else if (active === OPERATOR || active === NUMBER_2) { //is number2 or operator
            active = NUMBER_2
            number2 += buttonPressed
        } else if (active === RESULT) { //is result active
            clear()
            number1 += buttonPressed
        } else {
            console.log("Alert: Number button handling error")
        }
    } else if (validateOperator(buttonPressed)) { //is math operator
        if (buttonPressed === MINUS && active === NUMBER_1 && number1 === EMPTY_STRING) { //is minus operator while number1 empty, (POSITION SENSITIVE PLACEMENT)
            number1 = "-" //do not change to MINUS variable
        } else if (buttonPressed === MINUS && (active === NUMBER_2 || active === OPERATOR) && number2 === EMPTY_STRING) { //is minus operator while number2 empty, (POSITION SENSITIVE PLACEMENT)
            active = NUMBER_2
            number2 = "-" //do not change to MINUS variable
        } else if (active === NUMBER_1 || active === OPERATOR) { //is number 1 active or operator active
            if (number1 === EMPTY_STRING) { //error if number1 empty
                active = RESULT
                result = "ERROR: number1 empty"
            } else { //if nominal
            active = OPERATOR
            operator = buttonPressed
            }
        } else if (active === NUMBER_2) { //is number2 active
            active = OPERATOR
            number1 = operate(number1, number2, operator).toString()
            number2 = EMPTY_STRING
            operator = buttonPressed
        } else if (active === RESULT) { //is result active
            active = OPERATOR
            number1 = result
            operator = buttonPressed
            number2 = EMPTY_STRING
            result = EMPTY_STRING
        } else {
            console.log("Alert: Math operator handling error")
        }
    } else if (buttonPressed === EQUAL) { //is equal operator
        active = RESULT
        result = operate(number1, number2, operator).toString()
    }
    console.log(number1, operator, number2, "=", result, `Active: ${active}`)
    updateDisplay()
}

function updateDisplay () {
    if (active === NUMBER_1) {
        infoDisplay.textContent = ZERO_WIDTH_SPACE
        mainDisplay.textContent = number1
    } else if (active === OPERATOR) {
        infoDisplay.textContent = `${number1} ${operator}`
        mainDisplay.textContent = ZERO_WIDTH_SPACE
    } else if (active === NUMBER_2) {
        infoDisplay.textContent = `${number1} ${operator}`
        mainDisplay.textContent = number2
    } else if (active === RESULT) {
        infoDisplay.textContent = number1 !== EMPTY_STRING ? `${number1} ${operator} ${number2}` : EMPTY_STRING //display empty if nothing to display
        mainDisplay.textContent = result
    } else {
        console.log("Alert: updateDisplay error")
    }
    if (mainDisplay.textContent === EMPTY_STRING) {
        mainDisplay.textContent = ZERO_WIDTH_SPACE
    }
    if (infoDisplay.textContent === EMPTY_STRING) {
        infoDisplay.textContent = ZERO_WIDTH_SPACE
    }
}

const mainDisplay = document.querySelector("#mainDisplay")
const infoDisplay = document.querySelector("#infoDisplay")

const ZERO_WIDTH_SPACE = "\u200B"

const NUMBER_1 = "number1"
const OPERATOR = "operator"
const NUMBER_2 = "number2"
const RESULT = "result"

const CA = "CA"
const DEL = "DEL"
const DECIMAL_POINT = "."
const PLUS = "+"
const MINUS = "-"
const SUBTRACT = MINUS
const MULTIPLY = "x"
const DIVIDE = "÷"
const EQUAL = "="

const EMPTY_STRING = ""

let number1 = EMPTY_STRING
let number2 = EMPTY_STRING
let operator = EMPTY_STRING
let result = EMPTY_STRING
let active = NUMBER_1

clear()
connectButtons()