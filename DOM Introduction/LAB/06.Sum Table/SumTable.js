function sumTable() {

    const tableRowsElement = document.querySelectorAll('table tr');
    let tottalsum = 0 ;

    for (let index = 1; index < tableRowsElement.length; index++) {
        const cells = tableRowsElement[index].children; //връща колекция от двете деца 
        const cellsPrice = Number(cells[1].textContent);
        tottalsum += cellsPrice;
    }

    document.getElementById('sum').textContent = tottalsum;

}