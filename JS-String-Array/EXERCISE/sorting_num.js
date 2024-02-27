function sortArrayAlternate(arr) {
    let resultArray = [];
    let sortedArray = arr.sort((a, b) => a - b);
    let arrayLength = arr.length;
    

    for(let index =0; index<arrayLength; index++){

      if(index % 2 === 0){
        resultArray.push(sortedArray.shift());
      }else{
        resultArray.push(sortedArray.pop());

      }

    }
  
    return resultArray;
  }
  
  // Example
  const inputArray = [1, 65, 3, 52, 48, 63, 31, -3, 18, 56];
  const outputArray = sortArrayAlternate(inputArray);
  console.log(outputArray.join(', '));