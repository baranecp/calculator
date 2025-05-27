const inputField = document.querySelector('.display');
const buttons = document.querySelectorAll('.buttons button');

let curVal = '';
let oldVal = '';
let operator = null;
let isEvaluated = false;

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = (a, b, op) => {
  a = Number(a);
  b = Number(b);
  switch (op) {
    case '+': return add(a, b);
    case '-': return subtract(a, b);
    case '*': return multiply(a, b);
    case '/': return b !== 0 ? divide(a, b) : 'Error';
    default: return b;
  }
};

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const val = button.textContent;

        //Clear
        if(val === 'C') {
            curVal = '';
            oldVal = '';
            operator = null;
            isEvaluated = false;
            inputField.textContent = '';
            return;
        }

        //Backspace
        if(val === '←') {
            if(isEvaluated) {
                curVal = ''
                isEvaluated = false;
            } else {
                curVal = curVal.slice(0, -1);
            }
            inputField.textContent = curVal;
            return;
        }

        //Equals
        if(val === '=') {
            if(curVal && oldVal && operator) {
                const result = operate(oldVal, curVal, operator);
                inputField.textContent = result;
                curVal = result.toString();
                oldVal = '';
                operator = null;
                isEvaluated = true;
            }
            return;
        }

        //Operator
        if(['+', '-', '*', '/'].includes(val)) {
            if(curVal !== '') {
                oldVal = curVal;
                curVal = '';
                operator = val;
                isEvaluated = false;
            }
            return;
        }

        // Number or dot
        if(isEvaluated) {
            curVal = val;
            isEvaluated = false;
        } else {
            curVal += val;
        }
        inputField.textContent = curVal;
    })
})