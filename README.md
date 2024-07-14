# calculator

A web based basic calculator powered by JavaScript.

## Use on the web:

https://akipoh.github.io/calculator/

## Development

### Dev Stage 1

- [x] Basic math operator functions 
    - [mathOperator](value1, value2)
    - Operators:
        - Add
        - Substract
        - Multiply
        - Divide
            - Return error message if trying to divide by 0
    - Returns result
- [x] Operator function
    - operate(value1, value2, operator)
    - Decides which math operator function to call, returns output


### Dev Stage 2

- [x] Make UI in HTML and CSS (responsive design)
    - Context display
        - Empty
        - After math operator pressed number1 and math operator displayed
        - After equal pressed number1, math operator and number2 displayed
    - Current number/result
    - 0 - 9 numbers
    - Add, substract, multiply, divide
    - Equal button
    - Clear button
        - Wipes all data
- [ ] Implement functionality to UI
    - flow1:
        1. Number1
        2. Operator
        3. Number2
        4. Equal
    - flow2:
        1. Number1
        2. Operator
        3. Number2
        4. Operator (equal insert into value1) 
        5. ...
    - flow1:
        1. Number1
        2. Operator
        3. Number2
        4. Equal
        5. Operator (equal into value1)
        6. ...
    - error1:
        1. Number1
        2. Equal, "ERROR: operator not given"
    - error2:
        1. Number1
        2. Operator
        3. Equal, "ERROR: second number not given"
    - error3:
        1. Operator / Equal, "ERROR: no number given!"
    

### Dev Stage 3

- [ ] Round long result numbers to fit screen
- [ ] Handle negative numbers
- [ ] Handle user pressing equal before entrering all numbers
- [ ] Implement the ability to enter number, press math operator, enter number, press math operator (calculates numbers together and uses them as number1), enter number and equal. Ensure that works too after pressing equal and operator directly after, (error if result was error on the equal).
- [ ] Handle user pressing math operator before entering number1

### Dev Stage Maybe

- [ ] Allow user to enter floating point numbers
- [ ] Backspace button
- [ ] Keyboard support