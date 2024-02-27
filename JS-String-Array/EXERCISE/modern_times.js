function extractSpecialWords(inputString) {
    // Use a regular expression to find words starting with '#'
    const regex = /#\b\w+\b/g;
    const matches = inputString.match(regex);
  
    // Filter out invalid special words
    const validSpecialWords = matches.filter(word => /^[a-zA-Z]+$/.test(word.slice(1)));
  
    // Print each valid special word on a new line
    validSpecialWords.forEach(word => {
      console.log(word.slice(1));
    });
  }
  function modernTimesOfHashtag(string) {
    const regex = RegExp('#([a-z]+)(?:(?=#)| |$)', 'ig')

    const result = Array.from(string.matchAll(regex))

    result.forEach((value) => {console.log(value[1])})
}

modernTimesOfHashtag('#Nowa#days everyone uses # to tag a #special word in #socialMedia')

function hastagFinder(textToProcess) {
  const constraint = /(#[A-Za-z]+)/gm
  let words = textToProcess.match(constraint);

  for (let word of words) {
      word = word.replace("#", "");
      console.log(word);
  }

}