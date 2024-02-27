function convertToObject(jsonString) {
    const objectString = JSON.parse(jsonString)

    for (const key in objectString) {
        console.log(`${key}: ${objectString[key]}`)
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')

function convertToObject(jsonString) {
    let obj = JSON.parse(jsonString);

    Object.entries(obj).forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
    })
}