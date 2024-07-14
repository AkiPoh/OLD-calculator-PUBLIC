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

console.log(operate(1, 2, "/"))