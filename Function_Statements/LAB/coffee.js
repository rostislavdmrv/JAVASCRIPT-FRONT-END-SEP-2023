// function calculateOrder(product, quantity) {
//     let pricePerUnit;

//     switch (product) {
//         case 'coffee':
//             pricePerUnit = 1.50;
//             break;
//         case 'water':
//             pricePerUnit = 1.00;
//             break;
//         case 'coke':
//             pricePerUnit = 1.40;
//             break;
//         case 'snacks':
//             pricePerUnit = 2.00;
//             break;
//         default:
//             console.log('Invalid product');
//             return;
//     }

//     const totalPrice = pricePerUnit * quantity;
//     console.log(totalPrice.toFixed(2));
// }

function getOrderPrice(order,quantity){
    const drinkPrices = {
        coffee: 1.5,
        water: 1,
        coke:1.4,
        snaks: 2,

    };
    const price = drinkPrices[order];
    const totalPrice = price * quantity;
    console.log(totalPrice.toFixed(2));

        
    
}