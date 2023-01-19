function solve() {

    let firstNameInputElement = document.getElementById('fname');
    let lastNameInputElement = document.getElementById('lname');
    let emailInputElement = document.getElementById('email');
    let birthInputElement = document.getElementById('birth');
    let positionInputElement = document.getElementById('position');
    let salaryInputElement = document.getElementById('salary');

    let addWorkerBtnElement = document.getElementById('add-worker');
    let pMessageElement = document.getElementById('message');
    let spanMessageElement = document.getElementById('sum');

    let sum = 0;


    let tBodyElement = document.getElementById('tbody');

    addWorkerBtnElement.addEventListener('click', onAdd);

    function onAdd(e) {

        e.preventDefault();

        let firstName = firstNameInputElement.value;
        let lastName = lastNameInputElement.value;
        let email = emailInputElement.value;
        let birth = birthInputElement.value;
        let position = positionInputElement.value;
        let salary = salaryInputElement.value;

        let tableRowElement = document.createElement('tr');

        let tdFirstNameElement = document.createElement('td');
        tdFirstNameElement.textContent = `${firstName}`
        let tdLastNameElement = document.createElement('td');
        tdLastNameElement.textContent = `${lastName}`
        let tdemailElement = document.createElement('td');
        tdemailElement.textContent = `${email}`
        let tdbirthElement = document.createElement('td');
        tdbirthElement.textContent = `${birth}`
        let tdpositionElement = document.createElement('td');
        tdpositionElement.textContent = `${position}`
        let tdSalaryElement = document.createElement('td');
        tdSalaryElement.textContent = `${salary}`;

        let tdButtonElement = document.createElement('td');

        let firedBtnElement = document.createElement('button');
        firedBtnElement.setAttribute('class', 'fired');
        firedBtnElement.textContent = 'Fired';

        let editBtnElement = document.createElement('button');
        editBtnElement.setAttribute('class', 'edit');
        editBtnElement.textContent = 'Edit';

        tdButtonElement.appendChild(firedBtnElement);
        tdButtonElement.appendChild(editBtnElement);


        tableRowElement.appendChild(tdFirstNameElement);
        tableRowElement.appendChild(tdLastNameElement);
        tableRowElement.appendChild(tdemailElement);
        tableRowElement.appendChild(tdbirthElement);
        tableRowElement.appendChild(tdpositionElement);
        tableRowElement.appendChild(tdSalaryElement);
        tableRowElement.appendChild(tdButtonElement);


        tBodyElement.appendChild(tableRowElement);

        firstNameInputElement.value = ''
        lastNameInputElement.value = ''
        emailInputElement.value = ''
        birthInputElement.value = ''
        positionInputElement.value = ''
        salaryInputElement.value = ''

        sum += Number(tdSalaryElement.textContent);
        spanMessageElement.textContent = `${sum.toFixed(2)}`;


        editBtnElement.addEventListener('click', (e) => {

            
            firstNameInputElement.value = firstName;
            lastNameInputElement.value = lastName
            emailInputElement.value = email;
            birthInputElement.value = birth;
            positionInputElement.value = position;
            salaryInputElement.value = salary;
           
            sum -= Number(tdSalaryElement.textContent);
            spanMessageElement.textContent = `${sum.toFixed(2)}`;
            
            tableRowElement.remove();
        });

        firedBtnElement.addEventListener('click', (e) => {

            sum -= Number(tdSalaryElement.textContent);
            spanMessageElement.textContent = `${sum.toFixed(2)}`;
            
            tableRowElement.remove();
        })

    }


}
solve()