function displayNumbersAndSum(start, end) {
    let numbers = '';
    let sum = 0;

    for (let i = start; i <= end; i++) {
        numbers += i + ' ';
        sum += i;
    }

    console.log(numbers.trim()); // Trim to remove the trailing space
    console.log(`Sum: ${sum}`);
}
displayNumbersAndSum(5,10)