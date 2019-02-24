class EvaluateRPN {

  solvePostFix(postfix) {
    postfix = postfix.trim();
    let resultStack = [];
    postfix = postfix.split(' ');
    for(let i = 0; i < postfix.length; i++) {
      if(!isNaN(postfix[i])) {
        resultStack.push(postfix[i]);
      } else {
        let a = resultStack.pop();
        let b = resultStack.pop();
        if(postfix[i] === '+') {
          resultStack.push(add(parseFloat(a), parseFloat(b)));
        } else if (postfix[i] === '-') {
          resultStack.push(subtract(parseFloat(b), parseFloat(a)));
        } else if (postfix[i] === '*') {
          resultStack.push(multiply(parseFloat(a),parseFloat(b)));
        } else if (postfix[i] === '/') {
          resultStack.push(divide(parseFloat(b), parseFloat(a)));
        }
      }
    }

    if(resultStack.length > 1) {
      return "error";
    } else {
      return resultStack.pop();
    }
  }
}