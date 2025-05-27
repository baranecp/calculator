const inputField = document.querySelector('.display');
const buttons = document.querySelectorAll('.buttons button');

let curVal = '';
let oldVal = '';
let operator = null;

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
            inputField.textContent = '';
            return;
        }

        
    })
})