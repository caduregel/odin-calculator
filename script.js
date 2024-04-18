const display = document.querySelector('#display')
const buttons = document.querySelectorAll('.number-button')
const deleteButton = document.querySelector('#delete')
const operator = document.querySelectorAll('.operator')

let numberOne = ''
let numberTwo = ''
let operatorValue = ''
let answer = ''



function UpdateDisplay() {
    console.log("updateDisplay", { numberOne, numberTwo, operatorValue, answer })
    if (numberTwo) {
        let one = Number(numberOne);
        let two = Number(numberTwo);
        if (operatorValue == '+') {
            answer = one + two
        } else if (operatorValue == '-') {
            answer = one - two
        } else if (operatorValue == 'x') {
            answer = one * two
        } else if (operatorValue == '/') {
            answer = one / two
        }
    } else {
        answer = ''
    }
    console.log("updateDisplay2", { numberOne, numberTwo, operatorValue, answer })

    display.innerHTML = numberOne + ' ' + operatorValue + ' ' + numberTwo + (answer === '' ? "" : (' = ' + answer));
}

operator.forEach(whichOperator =>
    whichOperator.addEventListener(
        'click', function () {
            if (numberOne !== '') {
                operatorValue = whichOperator.innerHTML.toString()
                UpdateDisplay()
            }
        }
    ))

buttons.forEach(button =>
    button.addEventListener(
        'click', function () {
            if (operatorValue === '') {
                numberOne += button.id.toString()
            } else {
                numberTwo += button.id.toString()
            }
            UpdateDisplay()
        }
    ))

deleteButton.addEventListener('click', () => {
    if (numberTwo !== '') {
        numberTwo = numberTwo.slice(0, -1);
    } else if (operatorValue !== '') {
        operatorValue = ''
    } else if (numberOne !== '') {
        numberOne = numberOne.slice(0, -1)
    }
    UpdateDisplay()
})