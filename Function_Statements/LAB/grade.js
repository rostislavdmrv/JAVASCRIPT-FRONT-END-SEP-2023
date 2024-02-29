function printGradeDescription(grade) {
    if (grade >= 2.00 && grade <= 6.00) {
        let description;

        if (grade < 3.00) {
            description = "Fail ";
            grade =2;
            console.log(`${description} (${grade})`);

        } else if (grade < 3.50) {
            description = "Poor";
        } else if (grade < 4.50) {
            description = "Good";
        } else if (grade < 5.50) {
            description = "Very good";
        } else {
            description = "Excellent";
        }

        if(grade >=3){

        console.log(`${description} (${grade.toFixed(2)})`);
        }
    } else {
        console.log("Invalid grade. Please enter a grade between 2.00 and 6.00.");
    }
}

printGradeDescription(2.99);