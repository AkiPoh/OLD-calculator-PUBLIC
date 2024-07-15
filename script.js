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
    return ["+", "-", "x", "÷"].includes(operator);
}


function operate (number1, number2, operator) {
    if (number1 === "") {return "ERROR: number1 empty"}
    if (number2 === "") {return "ERROR: number2 empty"}
    [number1, number2] = [+number1, +number2]
    if (!validateNumber(number1)) {return `number 1: "${number1}" not valid input!`}
    if (!validateNumber(number2)) {return `number 2: "${number2}" not valid input!`}
    if (!validateOperator(operator)) { return `Operator: "${operator}" not valid input!`}

    if (operator === "+") {
        return add(number1, number2);
    } else if (operator === "-") {
        return substract(number1, number2);
    } else if (operator === "x") {
        return multiply(number1, number2);
    } else if (operator === "÷") {
        return divide(number1, number2);
    }
    return "ERROR: Operator function reached end without result!"
}


function connectButtons() {
    Array.from(document.querySelectorAll("button")).forEach(button => {
        if (!isNaN(+button.textContent)) { //if button a number
            button.addEventListener("click", () => handleButtonPress(+button.textContent))
        } else {
            button.addEventListener("click", () => handleButtonPress(button.textContent))
        }
    })
}

function clear() {
    number1 = ""
    number2 = ""
    operator = ""
    result = ""

    number1Active = true
    operatorActive = false
    number2Active = false
    resultActive = false

    infoDisplay.textContent = "\u200B"
    console.log("clear")
}

function handleButtonPress (buttonPressed) {
    if (isNaN(+result) || buttonPressed === "CA") { //is clear all
        clear()
    }
    if (buttonPressed === "DEL") { //is DEL
        if (number1Active) {
            number1 = number1.slice(0, number1.length - 1)
        } else if (operatorActive || number2 === "") {
            operator = ""
            number1Active = true
            operatorActive = false
            number2Active = false
        } else if (number2Active) {
            number2 = number2.slice(0, number2.length - 1)
        } else if (resultActive) {
            clear()
        }  else {
            console.log("DEL button handling error")
        }
    } else if (validateNumber(buttonPressed)) { //is number
        if (number1Active) { //is number1
            number1 += buttonPressed
        } else if (operatorActive || number2Active) { //is number2
            number2Active = true
            operatorActive = false
            number2 += buttonPressed
        } else if (resultActive) { //is result active
            clear()
            number1 += buttonPressed
        } else {
            console.log("number button handling error")
        }
    } else if (validateOperator(buttonPressed)) { //is math operator
        if (buttonPressed === "-" && number1Active && number1 === "") { //is minus operator while number1 empty, (POSITION SENSITIVE PLACEMENT)
            number1 = "-"
        } else if (buttonPressed === "-" && (number2Active || operatorActive) && number2 === "") { //is minus operator while number2 empty, (POSITION SENSITIVE PLACEMENT)
            number2Active = true
            operatorActive = false
            number2 = "-"
        } else if (number1Active || operatorActive) { //is number 1 active or operator active
            if (number1 === "") { //error if number1 empty
                resultActive = true
                operatorActive = false
                number1Active = false
                result = "ERROR: number1 empty"
            } else { //otherwise
            operatorActive = true
            number1Active = false
            operator = buttonPressed
            }
        } else if (number2Active) { //is number2 active
            operatorActive = true
            number2Active = false
            number1 = operate(number1, number2, operator).toString()
            number2 = ""
            operator = buttonPressed
        } else if (resultActive) { //is result active
            operatorActive = true
            resultActive = false
            number1 = result
            operator = buttonPressed
            number2 = ""
            result = ""
        } else {
            console.log("math operator handling error")
        }
    } else if (buttonPressed === "=") { //is equal operator
        resultActive = true
        number1Active = false
        operatorActive = false
        number2Active = false
        result = operate(number1, number2, operator).toString()
    }
    console.log(number1, operator, number2, "=", result)
    console.log(`number1Active: ${number1Active}, operatorActive: ${operatorActive}, number2Active: ${number2Active}, resultActive: ${resultActive}`)
    updateDisplay()
}

function updateDisplay () {
    if (number1Active) {
        infoDisplay.textContent = "\u200B"
        mainDisplay.textContent = number1
    } else if (number2Active) {
        infoDisplay.textContent = `${number1} ${operator}`
        mainDisplay.textContent = number2
    }
    else if (operatorActive) {
        infoDisplay.textContent = `${number1} ${operator}`
        mainDisplay.textContent = "\u200B"
    } else if (resultActive) {
        infoDisplay.textContent = number1 !== "" ? `${number1} ${operator} ${number2}` : "\u200B" //display empty if nothing to display
        mainDisplay.textContent = result
    } else {
        console.log("updateDisplay() alert")
    }
    if (mainDisplay.textContent === "") {
        mainDisplay.textContent = "\u200B"
    }
    if (infoDisplay.textContent === "") {
        infoDisplay.textContent = "\u200B"
    }
}

const mainDisplay = document.querySelector("#mainDisplay")
const infoDisplay = document.querySelector("#infoDisplay")


let number1 = ""
let number2 = ""
let operator = ""
let result = ""
let number1Active = true
let operatorActive = false
let number2Active = false
let resultActive = false

clear()
connectButtons()


console.log("number".slice(0, 5))

console.log(Number("-1"))