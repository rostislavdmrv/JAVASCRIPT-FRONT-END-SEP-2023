function oddOccurrences(input){
    input = input.toLowerCase();
    let arrOfElement = input.split(' '); 
    let map = new Map();

    arrOfElement.forEach((element) => {
        if(map.has(element)){
            let oddValue = map.get(element);
            let newValue = oddValue +1 ;

            map.set(element,newValue);
        }
        else{
            map.set(element,1);
        }
        
    });
    let result = [];
    map.forEach((value,key) =>{
        if(value % 2 !== 0){
            result.push(key);

        }
    });

    console.log(result.join(' '));

}