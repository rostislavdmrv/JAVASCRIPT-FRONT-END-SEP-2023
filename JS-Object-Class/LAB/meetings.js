function meetings(appointments) {
    const meetings = {}

    for (const appointment of appointments) {
        const [day, person] = appointment.split(' ')

        if (day in meetings) {
            console.log(`Conflict on ${day}!`)
        } else {
            meetings[day] = person
            console.log(`Scheduled for ${day}`)
        }
    }

   for (const meeting in meetings) {
       console.log(`${meeting} -> ${meetings[meeting]}`)
   }
}

meetings(['Monday Peter',
 'Wednesday Bill',
 'Monday Tim',
 'Friday Tim'])

 function schedule(stringsArray) {
    let meetings = stringsArray.reduce((acc, curr) => {
        [day, nameOfPerson] = curr.split(" ");
        if (acc[day]) console.log(`Conflict on ${day}!`);
        else {
            acc[day] = nameOfPerson;
            console.log(`Scheduled for ${day}`)

        }
        return acc
    }, {})

    Object.entries(meetings).forEach(([key, value]) => {
        console.log(`${key} -> ${value}`);
    })
}