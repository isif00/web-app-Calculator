class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }


    clear() {
        this.currentOperandTextElement = ''
        this.previousOperandTextElement = ''
        this.operation = undefined
    }

    delete(){

    }

    appendNumber(number) {

    }

    chooseOperation(operation){

    }

    compute(){

    }

    updateDisplay(){

    }
}   



const numberButtons = document.querySelectorAll('[data-number]')
const DeleteButton = document.querySelectorAll('[data-delete]')
const EqualsButton = document.querySelectorAll('[data-equals]')
const OperationsButton = document.querySelectorAll('[data-operation]')
const allClearButton = document.querySelectorAll('[data-all-clear]')
const previousOperandTextElement = document.querySelectorAll('[data-previous-operand]')
const currentOperandTextElement = document.querySelectorAll('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)