function oddAndEvenSum(num) {
  const digits = num.toString();
  let evenSum = 0;
  let oddSum = 0;

  for (let index = 0; index< digits.length; index++) {

     currentDigit = Number(digits[index]);
    if (currentDigit % 2 == 0) {
      evenSum += currentDigit;
    } else {
      oddSum += currentDigit;
    }
  }

  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
