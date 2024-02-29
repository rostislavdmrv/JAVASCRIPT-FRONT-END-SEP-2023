function addAndSubtract(x, y, z) {
  function sum() {
      return x + y
  }

  function subtract() {
      return sum() - z
  }

  console.log(subtract())
}

// variant2
function sum(num1, num2) {
    return num1 + num2;
  }
  
  // Function to subtract the result of the sum() function from the third integer
  function subtract(num1, num2, num3) {
    const resultOfSum = sum(num1, num2);
    return resultOfSum - num3;
  }
  
  // Example
  const result = subtract(23, 6, 10);
  console.log(result); // Output: 19

  
// function subtract(num1, num2, num3) {
//     function sum(num1, num2) {
//     return num1 + num2;
//   }
//     const resultOfSum = sum(num1, num2);
//     console.log(resultOfSum - num3);
//   }
  
  