function phoneBook(book) {
    const obj = {}

    for (const personInfo of book) {
        const [name, phone] = personInfo.split(' ')
        obj[name] = phone
    }

    for (const name in obj) {
        console.log(`${name} -> ${obj[name]}`)
    }
}

phoneBook(['Tim 0834212554',
 'Peter 0877547887',
 'Bill 0896543112',
 'Tim 0876566344'])


 function phoneBook(stringsArray) {
    let phoneBook = stringsArray.reduce((acc, curr) => {
        [key, value] = curr.split(" ");
        acc[key] = value;
        return acc
    }, {})

    Object.keys(phoneBook).forEach((key) => {
        console.log(`${key} -> ${phoneBook[key]}`)
    })
}