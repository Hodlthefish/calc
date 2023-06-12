const calculate = () => {
    const operand1 = parseFloat(document.getElementById('operand1').value);
    const operand2 = parseFloat(document.getElementById('operand2').value);
    const operator = document.getElementById('operator').value;
  
    let result;
  
    switch (operator) {
      case '+':
        result = operand1 + operand2;
        break;
      case '-':
        result = operand1 - operand2;
        break;
      case '*':
        result = operand1 * operand2;
        break;
      case '/':
        result = operand1 / operand2;
        break;
      default:
        result = NaN;
    }
  
    if (isNaN(result)) {
      document.getElementById('result').textContent = 'Ошибка';
    } else {
      document.getElementById('result').textContent = result;
    }
  };
  
  const calculateButton = document.getElementById('calculate-button');
  calculateButton.addEventListener('click', calculate);
  