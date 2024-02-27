function createObj(firstName,lastName,age){
    let obj ={};
    obj.firstName = firstName;
    obj.lastName = lastName;
    obj.age = age;

    return obj;

}

function personInfo(firstName, lastName, age) {
    return {firstName, lastName, age};
}

console.log(personInfo("Peter",
"Pan",
"20"))

function personInfo(firstName, lastName, age) {
    return {
        firstName,
        lastName,
        age: Number(age),
    }
}