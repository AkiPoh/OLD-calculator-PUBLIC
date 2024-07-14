
//ensure that number is a number
function validateNumber (...numbers) {

}

function add (value1, value2) {
    return value1 + value2;
}

function substract (value1, value2) {
    return value1 - value2;
}

function multiply (value1, value2) {
    return value1 * value2;
}

function divide (value1, value2) {
    if (value2 === 0) {return "Error: bro tried to divide by zero xD";} //number not 0
    return value1 / value2;
}

console.log(divide(1, 0))