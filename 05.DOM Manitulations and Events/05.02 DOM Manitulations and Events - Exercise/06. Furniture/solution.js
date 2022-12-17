function solve() {

  let [generateButton, buyButton] = Array.from(document.querySelectorAll("button"));
  //Взимаме всички бутони и ги правим на масив

  generateButton.addEventListener('click', generate);
  buyButton.addEventListener('click', buy);

  function generate(event){

    // let input = document.querySelector("textarea").value;
    //Взимаме инпута от полето и го парсваме към обект.
    let inputObj = JSON.parse(document.querySelector("textarea").value)
    //{name: 'Sofa', img: 'https://res.cloudinary.com.jpg', price: 150, decFactor: 1.2}

    console.log(inputObj)

    inputObj.forEach((furniture) => {

      let tr = document.createElement("tr");   //създааме ред

      //Създаваме колона 1

      let td1 = document.createElement("td");   
      let img = document.createElement("img")   //към колоната създаваме снимка
      img.src = furniture.img;  //задаваме като стпйност снимката 

      td1.appendChild(img);   //прикачаме децата
      tr.appendChild(td1);

      //Създаваме колона 2

      let td2 = document.createElement('td');
      let p2 = document.createElement('p');
      p2.textContent = furniture.name;

      td2.appendChild(p2);
      tr.appendChild(td2);

      //създаваме колона 3

      let td3 = document.createElement('td');
      let p3 = document.createElement('p');
      p3.textContent = Number(furniture.price);

      td3.appendChild(p3);
      tr.appendChild(td3);

      //създаваме колона 4

      let td4 = document.createElement('td');
      let p4 = document.createElement('p');
      p4.textContent = Number(furniture.decFactor);

      td4.appendChild(p4);
      tr.appendChild(td4);

      //създаваме колона 5

      let td5 = document.createElement('td');
      let input = document.createElement('input');
      input.type = 'checkbox';
      td5.appendChild(input);
      tr.appendChild(td5);

      //На тялото закачаме като дете всеки направен ред

      document.querySelector('tbody').appendChild(tr)
    })


  }


  function buy(event){

    //Намираме всички чекбоксове, правим ги на масив и ги филтрирам да останат само чекнатите

    let checkboxes = Array.from(document.querySelectorAll('tbody input')).filter((checkbox) => checkbox.checked);

    let boughtFurniture = [];
    let totalPrice = 0;
    let totalDecorationFactor = 0;

    checkboxes.forEach((checkbox) => {

      let parent = checkbox.parentElement.parentElement;  //Качваме се нагоре по дървото 2 пъти до родителя
      let data = Array.from(parent.querySelectorAll('p'));  //Данните са параграфите и ги правим на масив

      boughtFurniture.push(data[0].textContent)   //Към списъка добавяме, на 0 индекс е името
      totalPrice += Number(data[1].textContent)   //Към крайната цена добавяме
      totalDecorationFactor += Number(data[2].textContent);
    });

    // Намираме полето за изписване, той е втория на страницата

    let output = document.querySelectorAll('textarea')[1];
    output.textContent += `Bought furniture: ${boughtFurniture.join(', ')}\n`;  //join на масива
    output.textContent += `Total price: ${totalPrice.toFixed(2)}\n` //добавяме крайната цена
    output.textContent += `Average decoration factor: ${Number(totalDecorationFactor/checkboxes.length)}`;


  }
}