function updateDisplay(value) {
  let screen = document.querySelector("#display");
  let displayed = screen.innerHTML;
  if (value == "AC") {
    screen.innerHTML = "0";
    hasDecimal = false;
  } else if (value == "=") {
    let equation = displayed;
    let lastChar = equation[equation.length - 1];
    equation = equation.replace(/÷/, "/");

    if (operators.indexOf(lastChar) > -1 || lastChar == ".") {
      equation = equation.replace(/.$/, "");
    }
    if (equation) {
      const convertToRPN = new ShuntYard();
      let rpn = convertToRPN.inFixToPostFix(equation);
      const answer = new EvaluateRPN();
      screen.innerHTML = answer.solvePostFix(rpn)
    }

    hasDecimal = false;
  } else if (operators.indexOf(value) > -1) {
    let lastChar = displayed[displayed.length - 1];
    if (displayed != "" && operators.indexOf(lastChar) === -1) {
      screen.innerHTML += value;
    } else if (displayed == "" && value == "-") {
      screen.innerHTML +=  value;
    }

    if (operators.indexOf(lastChar) > -1 && displayed.length > 1) {
      screen.innerHTML = displayed.replace(/.$/, value);
    }
    hasDecimal = false;
  } else if (value == ".") {
    if (!hasDecimal) {
      screen.innerHTML += value;
      hasDecimal = true;
    }
  } else {
    if(displayed == '0'){
      screen.innerHTML = '';
    } else if (displayed[0] == '-') {
      screen.innerHTML = '0' + screen.innerHTML;
    }
    screen.innerHTML += value;
  }
}