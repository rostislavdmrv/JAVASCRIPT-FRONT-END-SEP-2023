// const calculate = (numOne, numTwo, operator) => {
//     switch (operator) {
//         case 'multiply':
//             return numOne * numTwo;
//         case 'divide':
//             return numTwo !== 0 ? numOne / numTwo : 'Cannot divide by zero';
//         case 'add':
//             return numOne + numTwo;
//         case 'subtract':
//             return numOne - numTwo;
//         default:
//             return 'Invalid operator';
//     }
// };

// function calc(numOne, numTwo, operator){
//     const calculate = (numOne, numTwo, operator) => {
//         return console.log(operator === 'multiply' ? numOne * numTwo :
//                operator === 'divide' && numTwo !== 0 ? numOne / numTwo :
//                operator === 'add' ? numOne + numTwo :
//                operator === 'subtract' ? numOne - numTwo :
//                'Invalid operator');
//     };

// }

function calculate (x,y,operator){
    const operations = {
        multiply: (x, y)=>x*y,
        divide: (x, y)=>x/y,
        add: (x, y)=>x+y,
        subtract: (x, y)=>x-y,
    
    };
    const operatorFun = operations[operator];
    const result = operatorFun(x, y);
    console.log(result);
    //console.log(operations [operator](x,y))
}

