function addItem() {
   let itemsElement = document.getElementById('items');
   let inputElement = document.getElementById('newItemText');


   let liElement = document.createElement('li');
   liElement.textContent = inputElement.value;

   inputElement.value = '';

   let linkElement = document.createElement('a');
   linkElement.href = '#';
   linkElement.textContent = '[Delete]';

   linkElement.addEventListener('click', (e) => {
    e.currentTarget.parentElement.remove()
   })


   liElement.appendChild(linkElement);
   itemsElement.appendChild(liElement);
}