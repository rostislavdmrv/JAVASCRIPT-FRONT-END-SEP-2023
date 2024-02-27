function towns(strings) {
    for (const row of strings) {
        let [town, latitude, longitude] = row.split(' | ');
        latitude = parseFloat(latitude).toFixed(2)
        longitude = parseFloat(longitude).toFixed(2)

        console.log({town, latitude, longitude})
    }
}

function towns(strings) {
    for (const row of strings) {
        let [town, latitude, longitude] = row.split(' | ');

        let currentTownInfo ={
            town,
            latitude:Number(latitude).toFixed(2),
            longitude:Number(longitude).toFixed(2)


        }


        console.log(currentTownInfo);
    }
}