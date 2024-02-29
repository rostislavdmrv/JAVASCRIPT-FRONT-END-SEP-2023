function squareMatrix(number) {
    for (let i = 0; i < number; i++) {
        console.log(((number.toString() + " ").repeat(number)).trim())
    }
}


function nxnMatrix(n) {
    for (let i = 0; i < n; i++) {
        console.log(`${n} `.repeat(n))
    }
}

nxnMatrix(2)