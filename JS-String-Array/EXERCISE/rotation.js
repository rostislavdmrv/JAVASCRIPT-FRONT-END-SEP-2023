function rotateArray(arr, rotations) {
    const len = arr.length;
  
    
    const effectiveRotations = rotations % len;
  
    // Use Array.slice() to create two subarrays and then concatenate them in reverse order
    const rotatedArray = arr.slice(effectiveRotations).concat(arr.slice(0, effectiveRotations));
  
    // Print the resulting array elements separated by a single space
    console.log(rotatedArray.join(' '));
  }

function rotation(array,rotations){
  for(let i =0;i<rotations;i++){
    let elementToTake = array.shift();
    array.push(elementToTake);
  }
  console.log(array.join(' '));
}