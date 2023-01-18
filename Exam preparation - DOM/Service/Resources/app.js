window.addEventListener('load', solve);

function solve() {

    let productTypeElement = document.getElementById('type-product');
    let descriptionElement = document.getElementById('description');
    let nameElement = document.getElementById('client-name');
    let phoneElement = document.getElementById('client-phone');

    let recievedFormElement = document.getElementById('received-orders');
    let completedOrdersElement = document.getElementById('completed-orders')

    let buttonSubmitElement = document.getElementsByTagName('button');

    let clearButtonElement = document.getElementsByClassName('clear-btn');

    buttonSubmitElement[0].addEventListener('click', onSubmit);

    function onSubmit(e) {

        e.preventDefault();

        let type = productTypeElement.value;
        let description = descriptionElement.value;
        let name = nameElement.value;
        let phone = phoneElement.value;

        if (description == '' || name == '' || phone == '') {
            return;
        };

        let divContaineredlement = document.createElement('div');
        divContaineredlement.setAttribute('class', 'container');

        let h2Element = document.createElement('h2');
        h2Element.textContent = `Product type for repair: ${type}`
        let h3Element = document.createElement('h3');
        h3Element.textContent = `Client information: ${name}, ${phone}`
        let h4Element = document.createElement('h4');
        h4Element.textContent = `Description of the problem: ${description}`
        let startButtonElement = document.createElement('button');
        startButtonElement.textContent = `Start repair`;
        startButtonElement.setAttribute('class', 'start-btn')
        let finishButtonElement = document.createElement('button');
        finishButtonElement.textContent = `Finish repair`;
        finishButtonElement.setAttribute('class', 'finish-btn');
        finishButtonElement.disabled = true;

        divContaineredlement.appendChild(h2Element);
        divContaineredlement.appendChild(h3Element);
        divContaineredlement.appendChild(h4Element);
        divContaineredlement.appendChild(startButtonElement);
        divContaineredlement.appendChild(finishButtonElement);

        recievedFormElement.appendChild(divContaineredlement);

        productTypeElement.value = '';
        descriptionElement.value = '';
        nameElement.value = '';
        phoneElement.value = '';

        startButtonElement.addEventListener('click', onRepair)

        function onRepair(e) {

            startButtonElement.disabled = true;
            finishButtonElement.disabled = false;
        };

        finishButtonElement.addEventListener('click', onFinish);

        function onFinish(e) {

            let finishDivContainer = document.createElement('div');
            finishDivContainer.setAttribute('class', 'container');

            let h2Element = document.createElement('h2');
            h2Element.textContent = `Product type for repair: ${type}`
            let h3Element = document.createElement('h3');
            h3Element.textContent = `Client information: ${name}, ${phone}`
            let h4Element = document.createElement('h4');
            h4Element.textContent = `Description of the problem: ${description}`

            finishDivContainer.appendChild(h2Element);
            finishDivContainer.appendChild(h3Element);
            finishDivContainer.appendChild(h4Element);

            completedOrdersElement.appendChild(finishDivContainer);

            divContaineredlement.remove();

            clearButtonElement[0].addEventListener('click', onClear);

            function onClear(e) {

                finishDivContainer.remove();
            }
        };




    }
}