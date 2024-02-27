function countOccurrences(text, word) {
    
    let wordsArray = text.split(' ');

    
    let occurrences = wordsArray.filter(currentWord => currentWord === word).length;// за да върне броя

    console.log(occurrences);
}