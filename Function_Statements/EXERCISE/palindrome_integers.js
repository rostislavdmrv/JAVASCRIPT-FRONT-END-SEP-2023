function palindrome(arr) {
    const arrToString = arr.map(String);

    for (let string of arrToString) {
        if (string === string.split("").reverse().join("")) console.log("true");
        else console.log("false");
    }
} 

// let numAsString = num.ToString();
// let reverseNum =  numAsString.split(' ').reverse().join();
// return numAsString === reverseNum;