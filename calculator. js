"use strict";

// Calculator function
function calculate(num1, operator, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;

    case "-":
      return num1 - num2;

    case "*":
      return num1 * num2;

    case "/":
      if (num2 === 0) {
        return "Error: Cannot divide by zero";
      }
      return num1 / num2;

    case "%":
      if (num2 === 0) {
        return "Error: Cannot divide by zero";
      }
      return num1 % num2;

    case "**":
      return num1 ** num2;

    default:
      return "Error: Invalid operator";
  }
}

// Test the calculator
console.log("Addition:", calculate(10, "+", 5));
console.log("Subtraction:", calculate(10, "-", 5));
console.log("Multiplication:", calculate(10, "*", 5));
console.log("Division:", calculate(10, "/", 5));
console.log("Division by zero:", calculate(10, "/", 0));
console.log("Remainder:", calculate(10, "%", 3));
console.log("Power:", calculate(2, "**", 3));
