function checkSameDigits(num) {
    let numStr = num.toString();
    let firstDigit = numStr[0];
    let sum = 0;
    let allSame = true;
    for (let i = 0; i < numStr.length; i++) {
        if (numStr[i] !== firstDigit) {
            allSame = false;
        }
        sum += parseInt(numStr[i]);
    }
    console.log(allSame);
    console.log(sum);
}

