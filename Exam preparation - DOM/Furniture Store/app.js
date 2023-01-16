window.addEventListener('load', solve);

function solve() {

    //Взимаме всички инпут полета:
    const modelElement = document.getElementById('model');
    const yearElement = document.getElementById('year');
    const descriptionElement = document.getElementById('description');
    const priceElement = document.getElementById('price');



    //взимаме листа с мебелите:
    const furnitureListelement = document.getElementById('furniture-list');


    let addButtonElement = document.getElementById('add') //селектираме бутона по ид
    addButtonElement.addEventListener('click', (e) => {

        e.preventDefault(); //когато автоматично се презарежда страницата, а не искаме.
        // console.log('button clicked');

        let year = Number(yearElement.value) //парсваме към число
        let price = Number(priceElement.value) //парсваме към число

        // modelElement.value = '';
        // yearElement.value = '';
        // descriptionElement.value = '';
        // priceElement.value = '';

        //ако са празни стрингове:
        if (!modelElement.value || !descriptionElement.value) {
            return;
        }
        //ако са отрицателни числа:
        if (year <= 0 || price <= 0) {
            return;
        }

        //създаваме tr element:
        let rowElement = document.createElement('tr')

        //създаваме td element за модела:
        let modelCellElement = document.createElement('td');
        modelCellElement.textContent = modelElement.value; //пълним елемента с текст

        //създаваме td element за цената:
        let priceCellElement = document.createElement('td');
        priceCellElement.textContent = price.toFixed(2);

        //създаваме actions:
        let actionCellElement = document.createElement('td');

        //създаваме бутоните към actionCellElement:
        let infoButtonElement = document.createElement('button');
        let buyButtonElement = document.createElement('button');

        //добавяме съдържанието на бутоните:
        infoButtonElement.textContent = 'More Info';
        buyButtonElement.textContent = 'Buy it';

        //създаваме скрития елемент:
        let contentsRowElement = document.createElement('tr')

        //създаваме td към скрития елемент:
        let yearContentElement = document.createElement('td');
        let descriptionContentElement = document.createElement('td');

        //
        let totalPriceElement = document.querySelector('.total-price');

        //добавяме класове на елементите:
        rowElement.classList.add('info');
        infoButtonElement.classList.add('moreBtn');
        buyButtonElement.classList.add('buyBtn');

        //правим функционалност на бутона Info:
        infoButtonElement.addEventListener('click', (e) => {
            if (e.currentTarget.textContent == 'More Info') {
                e.currentTarget.textContent = 'Less Info';
                contentsRowElement.style.display = 'contents'
            } else {
                e.currentTarget.textContent = 'More Info';
                contentsRowElement.style.display = 'none'
            }
        });

        //правим функционалност на бутона Buy:
        buyButtonElement.addEventListener('click', (e) => {

            let currentTotalPrice = Number(totalPriceElement.textContent); //задавме крайната цена
            let totalPrice = currentTotalPrice + price;
            totalPriceElement.textContent = totalPrice.toFixed(2);

            rowElement.remove();        //изтриваме елементите
            contentsRowElement.remove();


        })



        actionCellElement.appendChild(infoButtonElement);
        actionCellElement.appendChild(buyButtonElement);

        //Задаваме съдържанието:
        yearContentElement.textContent = `Year: ${year}`;
        descriptionContentElement.setAttribute('colspan', 3);
        descriptionContentElement.textContent = `Description: ${descriptionElement.value}`



        //добавяме клас на скрития елемент:
        contentsRowElement.classList.add('hide');
        contentsRowElement.style.display = 'none';


        //прикрепяме елементите към tr:
        rowElement.appendChild(modelCellElement);
        rowElement.appendChild(priceCellElement);
        rowElement.appendChild(actionCellElement);

        //добавяме елементите към row:
        contentsRowElement.appendChild(yearContentElement);
        contentsRowElement.appendChild(descriptionContentElement);


        //накрая прикрепяме tr към html елемента, който имаме:
        furnitureListelement.appendChild(rowElement);
        furnitureListelement.appendChild(contentsRowElement);
    })

}

