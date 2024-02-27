function sumOfFirstAndLast(arr) {
    if (arr.length >= 2) {
        
        let sum = arr[0] + arr[arr.length - 1];
        console.log(sum);
    } else {
        console.log("Array should have at least two elements.");
    }
}


sumOfFirstAndLast([20, 30, 40]);