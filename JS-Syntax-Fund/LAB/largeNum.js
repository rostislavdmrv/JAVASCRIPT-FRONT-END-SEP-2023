function findLargestNumber(num1, num2, num3) {
    let largestNumber;

    if (num1 >= num2 && num1 >= num3) {
        largestNumber = num1;
    } else if (num2 >= num1 && num2 >= num3) {
        largestNumber = num2;
    } else {
        largestNumber = num3;
    }

    console.log(`The largest number is ${largestNumber}.`);
}
/*
function findLargestNumber(num1, num2, num3) {
    // Using Math.max to find the largest number among the three
    const largestNumber = Math.max(num1, num2, num3);

    console.log(`The largest number is ${largestNumber}.`);
}
*/ 