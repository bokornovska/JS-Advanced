window.addEventListener("load", solve);

function solve() {
 
  const makeInputElement = document.getElementById('make');
  const modelInputElement = document.getElementById('model');
  const yearInputElement = document.getElementById('year');
  const fuelInputElement = document.getElementById('fuel');
  const originalCostInputElement = document.getElementById('original-cost');
  const sellingPriceInputElement = document.getElementById('selling-price');

  const tableBodyElement = document.getElementById('table-body')

  const publishBtnElement = document.getElementById('publish');

  const ulCarsList = document.getElementById('cars-list');
  
  const profitElement = document.getElementById('profit');

  let proffit = 0;
  publishBtnElement.addEventListener('click', onPublish);

  function onPublish(e) {

    e.preventDefault();

    let make = makeInputElement.value;
    let model = modelInputElement.value;
    let year = yearInputElement.value;
    let fuel = fuelInputElement.value;
    let cost = originalCostInputElement.value;
    let price = sellingPriceInputElement.value;

    if(make == '' || 
    model == '' || 
    year == '' || 
    fuel == '' || 
    cost == '' || 
    price == '' || 
    Number(price) < Number(cost)){
      return;
    };


    let trElement = document.createElement('tr');
    trElement.setAttribute('class', 'row');

    let tdMakeElement = document.createElement('td');
    tdMakeElement.textContent = `${make}`;

    let tdModelElement = document.createElement('td');
    tdModelElement.textContent = `${model}`;

    let tdYearElement = document.createElement('td');
    tdYearElement.textContent = `${year}`;

    let tdFuelElement = document.createElement('td');
    tdFuelElement.textContent = `${fuel}`;

    let tdCostElement = document.createElement('td');
    tdCostElement.textContent = `${cost}`;

    let tdPriceElement = document.createElement('td');
    tdPriceElement.textContent = `${price}`;

    let tdButtonElement = document.createElement('td');

    let editBtnelement = document.createElement('button');
    editBtnelement.setAttribute('class', 'action-btn edit');
    editBtnelement.textContent = `Edit`;

    let sellBtnElement = document.createElement('button');
    sellBtnElement.setAttribute('class', 'action-btn sell');
    sellBtnElement.textContent = `Sell`;

    tdButtonElement.appendChild(editBtnelement);
    tdButtonElement.appendChild(sellBtnElement);

    trElement.appendChild(tdMakeElement);
    trElement.appendChild(tdModelElement);
    trElement.appendChild(tdYearElement);
    trElement.appendChild(tdFuelElement);
    trElement.appendChild(tdCostElement);
    trElement.appendChild(tdPriceElement);
    trElement.appendChild(tdButtonElement);

    tableBodyElement.appendChild(trElement);

    makeInputElement.value = '';
    modelInputElement.value = '';
    yearInputElement.value = '';
    fuelInputElement.value = '';
    originalCostInputElement.value = '';
    sellingPriceInputElement.value = '';

    editBtnelement.addEventListener('click', onEdit);

    function onEdit(e) {

    makeInputElement.value = make;
    modelInputElement.value = model;
    yearInputElement.value = year;
    fuelInputElement.value = fuel;
    originalCostInputElement.value = cost;
    sellingPriceInputElement.value = price;

    trElement.remove();

    };

    sellBtnElement.addEventListener('click', onSale);

    function onSale(e) {

      let liSellElement = document.createElement('li');
      liSellElement.setAttribute('class', 'each-list');

      let firstSpanElement = document.createElement('span');
      firstSpanElement.textContent = `${make} ${model}`;

      let secondSpanElement = document.createElement('span');
      secondSpanElement.textContent = `${year}`;

      let difference = Number(price) - Number(cost);
      proffit += Number(difference);
      let thirdSpanElement = document.createElement('span');
      thirdSpanElement.textContent = `${difference}`;

      liSellElement.appendChild(firstSpanElement);
      liSellElement.appendChild(secondSpanElement);
      liSellElement.appendChild(thirdSpanElement);

      ulCarsList.appendChild(liSellElement);

      profitElement.textContent = `${proffit.toFixed(2)}`

      trElement.remove();

    }
  }

}
