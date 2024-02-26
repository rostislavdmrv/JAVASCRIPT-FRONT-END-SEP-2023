function printMonth(monthNumber) {
    if (monthNumber >= 1 && monthNumber <= 12) {
        
        const months = [
            "January", "February", "March", "April",
            "May", "June", "July", "August",
            "September", "October", "November", "December"
        ];

        
        console.log(months[monthNumber - 1]);
    } else {
        
        console.log("Error!");
    }
}