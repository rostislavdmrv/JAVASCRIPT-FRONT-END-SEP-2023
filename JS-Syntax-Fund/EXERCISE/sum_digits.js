function sumOfDigits(number) {
    let sum = 0;
    let numString = number.toString();

    for (let digit of numString) {
        sum += parseInt(digit); 
    }

    return sum;
}
sumOfDigits(2569)