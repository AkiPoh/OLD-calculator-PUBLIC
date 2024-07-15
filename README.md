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
- [x] Implement functionality to UI
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
    - flow3:
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

### Dev stage 3

- [x] Improve handleButtonPress() and updateDisplay() readability by implementing logic based on currently active field
- [x] Implement DEL button functionality
- [x] Implement the ability set number to be negative by pressing - as the first character

### Dev Stage Maybe

- [ ] Allow user to enter floating point numbers
- [ ] Keyboard support
- [ ] Handle negative numbers