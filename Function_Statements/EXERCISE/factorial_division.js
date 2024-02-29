function factorialDivision(x, y) {
    function calculateFactorial(number) {
        let sum = 1;
        for (let i = 1; i <= number; i++) {
            sum *= i;
        }
        return sum;
    }

    factorialX = calculateFactorial(x);
    factorialY = calculateFactorial(y);

    console.log((factorialX / factorialY).toFixed(2));
}


function factorialDivision(n1, n2) {
    function recursionFactorial(n) {
        function wrapper(result, n) {
            if (n === 1) {
                return result;
            }
            n--;
            return wrapper(result * n, n);
        }
        return wrapper(n, n)
    }

    let factorialN1 = recursionFactorial(n1);
    let factorialN2 = recursionFactorial(n2);

    const divisionResult = factorialN1 / factorialN2;

    console.log(divisionResult.toFixed(2));
}

factorialDivision(6,2)