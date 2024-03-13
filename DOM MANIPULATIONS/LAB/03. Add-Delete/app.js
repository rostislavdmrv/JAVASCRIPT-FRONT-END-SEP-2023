function addItem() {
    const inputElement = document.querySelector('#newItemText');
    
    const newListItem = document.createElement('li');
    newListItem.textContent = inputElement.value;

    const deleteElement=document.createElement('a');
    deleteElement.href='#';
    deleteElement.textContent = '[Delete]';

    deleteElement.addEventListener('click',deleteItem);

    newListItem.appendChild(deleteElement);

    const ulList = document.querySelector('#items');
    ulList.appendChild(newListItem);

    inputElement.value = ' '; 

    function deleteItem(e){
        const row = e.currentTarget.parentNode;
        row.remove();
    }
}