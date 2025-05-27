const inputField = document.querySelector(".display");
const buttons = document.querySelectorAll(".buttons button");

let curVal = "";
let oldVal = "";
let operator = null;

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

