function calculateFruitCost(fruit, weightInGrams, pricePerKilogram) {
   
    let weightInKilograms = weightInGrams / 1000;

   
    let money = (weightInKilograms * pricePerKilogram).toFixed(2);

    
    console.log(`I need $${money} to buy ${weightInKilograms.toFixed(2)} kilograms ${fruit}.`);
}