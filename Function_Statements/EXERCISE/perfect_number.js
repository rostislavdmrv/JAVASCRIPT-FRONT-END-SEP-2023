function perfectNumber(number) {
    let sum = 0;

    for (let i = 1; i < number; i++) {
        if (number % i === 0) sum += i;
    }

    if (sum === number) console.log("We have a perfect number!");
    else console.log("It's not so perfect.");
}



function perfectNumber(number) {
    let properDivisorsSum = 0;

    for (let i = number / 2; i > 0; i--) {
        if (!(number % i)) {
            properDivisorsSum += i
        }
    }

    if (properDivisorsSum === number) {
        console.log('We have a perfect number!')
        return
    }

    console.log('It\'s not so perfect.')
}

perfectNumber(1236498)

