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
        
    });
}

function clear() {
    number1 = ""
    number2 = ""
    operator = ""
    result = ""
    infoDisplay.textContent = "\u200B"
    console.log("clear")
}

function handleButtonPress (buttonPressed) {
    if (isNaN(result) || buttonPressed === "CA") {
        clear()
    }
    if (validateNumber(buttonPressed)) { //is number
        if (operator === "") { //is first number
            number1 += buttonPressed
        } else if (result !== "") { //number pressed after result
            clear()
            number1 += buttonPressed
        }
        else { //is last number
            number2 += buttonPressed
        }
    } else if (validateOperator(buttonPressed)) { //math operator pressed
        if (result === "" && number2 === "" && number1 === "") {
            result = "ERROR: first number not given"
        } else if (result === "" && number2 === "") { //math operator pressed and number2 && result is empty
            operator = buttonPressed
        } else if (result === "") { //math operator pressed and number1 and number2 filled
            number1 = operate(number1, number2, operator)
            number2 = ""
            operator = buttonPressed

        } else { //math operator pressed and result filled
            number1 = result
            operator = buttonPressed
            number2 = ""
            result = ""
        }
    } else if (buttonPressed === "=") { //equal pressed
        result = operate(number1, number2, operator)
    }
    console.log(number1, operator, number2, "=", result)
    updateDisplay()
}

function updateDisplay () {
    mainDisplay.textContent = operator === "" ? number1 : number2
    if (operator !== "" && number2 === "") {
        mainDisplay.textContent = "\u200B"
        infoDisplay.textContent = `${number1} ${operator}`
    }
    if (result !== "") {
        mainDisplay.textContent = result
        infoDisplay.textContent = `${number1} ${operator} ${number2}`
    }
    if (mainDisplay.textContent === "") {
        mainDisplay.textContent = "\u200B"
    }
    if (infoDisplay.textContent === "" || (number1 === "" && number2 === "")) {
        infoDisplay.textContent = "\u200B"
    }
}

const mainDisplay = document.querySelector("#mainDisplay")
const infoDisplay = document.querySelector("#infoDisplay")


let number1 = ""
let number2 = ""
let operator = ""
let result = ""

clear()
connectButtons()