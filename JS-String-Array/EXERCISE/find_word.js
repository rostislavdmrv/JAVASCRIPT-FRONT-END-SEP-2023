function findWordInText(word, text) {
    // Convert both the word and the text to lowercase for case-insensitive comparison
    const lowercaseWord = word.toLowerCase();
    const lowercaseText = text.toLowerCase();
  
    // Check if the lowercase text contains the lowercase word
    if (lowercaseText.includes(lowercaseWord)) {
      console.log(word);
    } else {
      console.log(`${word} not found!`);
    }
  }
  
  // Example
  findWordInText('javascript', 'JavaScript is the best programming language');
  // Output: javascript

  function stringSubstring(wordToSearch, textToProcess) {
    textToProcess = textToProcess.toLowerCase()
    textToProcess = textToProcess.split(' ')

    if (textToProcess.includes(wordToSearch)) {
        console.log(wordToSearch);
    } else {
        console.log(`${wordToSearch} not found!`)
    }
}