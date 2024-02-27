function tracer(list){
    let stringList = list.shift().split(' ');

    let occurences = {};
    stringList.forEach((word)=> {
        occurences[word] = 0;

        list.forEach((element) =>{
            if(word === element)
            {
                occurences[word] +=1;
            }
        })
        
    });
    let entries = Object.entries(occurences).sort((a,b)=> b[1]-a[1]);
    for (const [key,value] of entries) {
        console.log(`${key} - ${value}`);
        
    }

}
tracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'])