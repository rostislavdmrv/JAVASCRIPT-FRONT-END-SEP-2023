function colorize() {
    const rows = document.getElementsByTagName('tr');

    for (let index = 0; index < rows.length; index++) {
       if (index % 2 !== 0){
        rows[index].style.background ='Teal';

       }
        
    }
}
function colorize() {
    let rows = Array.from(document.querySelectorAll("tr:nth-child(even)"));
 
    rows.map(row => row.style.background = "teal")
 }