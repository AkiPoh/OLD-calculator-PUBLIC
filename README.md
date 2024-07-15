# calculator

A web based basic calculator powered by JavaScript.

## Use on the web:

https://akipoh.github.io/calculator/

## Development

### Dev Stage 1

14.7.2024 - 14.7.2024

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

14.7.2024 -15.7.2024

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

15.7.2024 -

- [x] Improve handleButtonPress() and updateDisplay() readability by implementing logic based on currently active field
- [x] Implement DEL button functionality
- [x] Implement the ability set number to be negative by pressing - as the first character
- [x] When result active and DEL pressed remove last character of result, set it as number1, clear infoDisplay and variables
- [x] Add section at bottom for link to GitHub repo
- [x] Implement ability to enter floating point numbers

### Possible Future Features

- [ ] Implement ability to paste a number into calculator on desktop
    - Handle numbers made floating point by "," or "."
    - Handle negative numbers
    - Add number to currently active if number1 or number2 active
    - Trim
    - Require to paste two times if a number already entered
        - Notify at bottom error message area
    - Error message at bottom if invalid
- [ ] Keyboard support
- [ ] Implement ability to enter equations into calculator
    - Examples: 
        - "15 + 2"
        - "15 - 2"
        - "15 x 2"
        - "15 X 2"
        - "15 * 2"
        - "5 : 2"
        - "5 / 2"
        - "5 ÷ 2"
        - "20+20"
        - "   20      +  20   "
        - "20 + 20 ="
        - "   20  +   20  =  "
        - "-20 * -20"
    - Functionality
        - Trim and seperatate data
            - Delete invalid characters
            - Seperate data
                - Handle negative numbers
            - Temporary variables for data
            - Check if necessary and valid inputs received
                - Alert at bottom if not
        - Pasted: number1 operator number2
            - infoDisplay: number1 operator
            - mainDisplay: number2
            - number2Active = true
        - Pasted: number1 operator number2 equal
            - infoDisplay number1 operator number2
            - mainDisplay result
            - resultActive = true