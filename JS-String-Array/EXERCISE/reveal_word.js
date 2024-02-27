// function replaceWords(inputWords, templateString) {
//     // Split the input string into an array of words
//     const words = inputWords.split(', ');
  
//     // Split the template string into an array of templates
//     const templates = templateString.split(' ');
  
//     // Replace '*' in templates with words of the same length
//     const replacedTemplates = templates.map(template => {
//       if (template.includes('*')) {
//         const wordLength = template.length;
//         const matchingWord = words.find(word => word.length === wordLength);
//         return matchingWord || template;
//       } else {
//         return template;
//       }
//     });
  
//     // Join the replaced templates into a new string
//     const resultString = replacedTemplates.join(' ');
  
//     return resultString;
//   }
  
//   // Examples
//   const example1 = replaceWords('great', 'softuni is ***** place for learning new programming languages');
//   console.log(example1);
function reveal(words,text) {

  let wordsArr = words.split(', ');
  let textArr = text.split(' ');

  for(let i = 0; i < wordsArr.length;i++){

    for(let j = 0; j < textArr.length; j++){

      if(textArr[j].includes('*') && textArr[j].length === wordsArr[i].length){

        textArr[j] =  wordsArr[i];

      }

    }


  }
  console.log(textArr.join(' '));

}