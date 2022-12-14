function search() {
   
   let inputElement = document.getElementById('searchText').value;
   let townsElement = Array.from(document.querySelectorAll('#towns li'));
   let resultElement = document.getElementById('result');

   let count = 0;

   for(let town of townsElement){
      
      if(town.textContent.includes(inputElement) && inputElement !== ''){

         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         count++;

      }else{
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none';
      }
   }

   resultElement.textContent = `${count} matches found`


}
