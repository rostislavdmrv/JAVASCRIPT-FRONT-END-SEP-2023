function cookingByNumbers(inputNumber, ...operations) {
    let number = Number(inputNumber);

    for (let operation of operations) {
        switch (operation) {
            case 'chop':
                number /= 2;
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number += 1;
                break;
            case 'bake':
                number *= 3;
                break;
            case 'fillet':
                number -= number * 0.2;
                break;
            default:
                console.log('Invalid operation');
                return;
        }

        console.log(number);
    }
}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')