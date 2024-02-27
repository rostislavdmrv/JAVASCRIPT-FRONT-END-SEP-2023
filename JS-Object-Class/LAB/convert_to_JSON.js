function convertToJSON(firstName, lastName, hairColor) {
    console.log(JSON.stringify({
        name: firstName,
        lastName,
        hairColor,
    }));
}
function convertToJson(firstName, lastName, hairColor) {
    const obj = {firstName, lastName, hairColor}  // firstNmae : firstname

    console.log(JSON.stringify(obj))
}