function splitPascalCase(inputString) {
    // Use a regular expression to split the PascalCase string into words
    const words = inputString.split(/(?=[A-Z])/);
  
    // Join the words with commas and spaces
    const result = words.join(', ');
  
    console.log(result);
  }
  
  // Examples
  splitPascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan');
  // Output: Split, Me, If, You, Can, Ha, Ha, You, Cant, Or, You, Can

  function pascalCaseSplitter(string) {
    let words = string.split(/(?=[A-Z])/);

    console.log(words.join(", "));

}