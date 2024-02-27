// function printSortedNames(names) {
//     // Sort the names alphabetically
//     const sortedNames = names.slice().sort();
  
//     // Print a numbered list of sorted names
//     sortedNames.forEach((name, index) => {
//       console.log(`${index + 1}.${name}`);
//     });
//   }

  function listOfName(names){
    names.sort((a,b)=>{
      return a.localeCompare(b);
    });
    let index =1;

    for (const name of names) {
      console.log(`${index}.${name}`);
      index++;
    }
  }