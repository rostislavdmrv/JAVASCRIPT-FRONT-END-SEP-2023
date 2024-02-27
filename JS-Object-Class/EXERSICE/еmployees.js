function employees(input){

    input.forEach(employee => {

        const employeeName  = employee;
        const employeeNumber = employee.length;

        console.log(`Name: ${employeeName} -- Personal Number: ${employeeNumber}`);
        
    });

}    