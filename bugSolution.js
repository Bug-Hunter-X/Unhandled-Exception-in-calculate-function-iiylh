function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}

function calculate(a, b, operator) {
  const validOperators = ["+", "-", "*", "/"];
  if (!validOperators.includes(operator)) {
    throw new Error(`Invalid operator. Valid operators are: ${validOperators.join(', ')}`);
  }
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
}

console.log(calculate(10, 5, '+')); // Output: 15
console.log(calculate(10, 5, '-')); // Output: 5
console.log(calculate(10, 5, '*')); // Output: 50
console.log(calculate(10, 5, '/')); // Output: 2
console.log(calculate(10, 0, '/')); // Output: Error: Division by zero
console.log(calculate(10, 5, '%')); // Output: Error: Invalid operator. Valid operators are: +, -, *, /