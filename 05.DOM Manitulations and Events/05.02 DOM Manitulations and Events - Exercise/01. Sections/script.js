function create(words) {
   
   let parentElement = document.getElementById('content');
   let elements = words;

   for(el of elements){
      let div = document.createElement('div');
      let p = document.createElement('p');
      let currentText = document.createTextNode(el);
      
      p.appendChild(currentText);
      p.style.display = 'none';
      div.appendChild(p);

      div.addEventListener('click', (e) => {
         p.style.display = 'block'
      });
      parentElement.appendChild(div);

   }
}