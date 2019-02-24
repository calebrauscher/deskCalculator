class ShuntYard {

  inFixToPostFix(infix) {
    let outputQueue = '';
    let operatorStack = [];
    let operators = {
      '/': {
        precedence: 3,
        associatvity: 'Left'
      },
      '*': {
        precedence: 3,
        associatvity: 'Left'
      },
      '+': {
        precedence: 2,
        associatvity: 'Left'
      },
      '-': {
        precedence: 2,
        associatvity: 'Left'
      }
    };

    infix = infix.replace(/\s+/g,'');
    infix = infix.split('');
    
    for(let i = 0; i < infix.length; i++) {
      let token = infix[i];
      let peek = infix[i+1];
      if(!isNaN(token) || token === '.') {
        if(!isNaN(peek) || peek === '.'){
          outputQueue += token;
        } else {
        outputQueue += token + ' ';
        }
      } else if ('+-*/'.indexOf(token) !== -1) {
        let a = token;
        let b = operatorStack[operatorStack.length - 1];
        while('+-*/'.indexOf(b) !== -1 && ((operators[a].associatvity === 'Left' && operators[a].precedence <= operators[b].precedence) || (operators[a].associatvity === 'Right' && operators[a].precedence < operators[b].precedence))) {
          outputQueue += operatorStack.pop() + ' ';
          b = operatorStack[operatorStack.length - 1];
        }
        operatorStack.push(a);

      }
    }

    while (operatorStack.length > 0) {
      outputQueue += operatorStack.pop() + ' ';
    }
    return outputQueue;

    }
}