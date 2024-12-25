// Calculator program in Node.js

// Function to perform addition
function add(num1, num2) {
  // TODO: Perform addition operation here
  return num1 + num2;
}

// Function to perform subtraction
function subtract(num1, num2) {
  // TODO: Perform subtraction operation here
  return num1 - num2;
}

// Function to perform multiplication
function multiply(num1, num2) {
  // TODO: Perform multiplication operation here
  return num1 * num2;
}

// Function to perform division
function divide(num1, num2) {
  // TODO: Perform division operation here
  if (num2 === 0) {
    return "Error: Division by zero is not allowed.";
  }
  return num1 / num2;
}

// Main program
function calculator() {
  // TODO: Get user input for numbers and operation
  // TODO: Call the appropriate function based on the operation
  // TODO: Output the result
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log("Welcome to the Calculator!");
  console.log("Available operations: add, subtract, multiply, divide");

  readline.question("Enter the first number: ", (num1Input) => {
    const num1 = parseFloat(num1Input);

    readline.question("Enter the second number: ", (num2Input) => {
      const num2 = parseFloat(num2Input);

      readline.question(
        "Enter the operation (add, subtract, multiply, divide): ",
        (operation) => {
          let result;

          switch (operation.toLowerCase()) {
            case "add":
              result = add(num1, num2);
              break;
            case "subtract":
              result = subtract(num1, num2);
              break;
            case "multiply":
              result = multiply(num1, num2);
              break;
            case "divide":
              result = divide(num1, num2);
              break;
            default:
              result = "Error: Invalid operation.";
              break;
          }

          console.log("Result:", result);
          readline.close();
        }
      );
    });
  });
}

// Invoke the calculator function to start the program
calculator();
