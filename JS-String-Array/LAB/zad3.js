function calculateDifference(arr) {
    let sumEven = 0;
    let sumOdd = 0;

    for (let number of arr) {
        if (number % 2 === 0) {
            // Even number
            sumEven += number;
        } else {
            // Odd number
            sumOdd += number;
        }
    }

    // Calculate the difference
    let difference = sumEven - sumOdd;

    console.log(difference);
}




