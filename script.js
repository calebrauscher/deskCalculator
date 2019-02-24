const keys = document.querySelectorAll(".calculator-buttons div");

const operators = ["+", "-", "*", "?"];
let hasDecimal = false;

keys.forEach(key => {
  key.addEventListener("click", () => {
    updateDisplay(key.innerHTML);
  });
});


function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) {
    return "div/0";
  } else {
    return num1 / num2;
  }
}

