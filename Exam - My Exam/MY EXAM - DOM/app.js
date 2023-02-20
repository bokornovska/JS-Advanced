window.addEventListener('load', solve);

function solve() {
   
    let firstNameInputElement = document.getElementById('first-name');
    let lastNameInputElement = document.getElementById('last-name');
    let peopleCountElement = document.getElementById('people-count');
    let fromDateElement = document.getElementById('from-date');
    let daysCountElement = document.getElementById('days-count');

    let infoTicketULElement = document.querySelector('.ticket-info-list');
    let confirmTicketUlElement = document.querySelector('.confirm-ticket');
    let mainDivElement = document.getElementById('main');
    let bodyElement = document.getElementById('body');

    let nextBtnElement = document.getElementById('next-btn');

    nextBtnElement.addEventListener('click', onNext);

    function onNext(e){
        e.preventDefault();

        let firstName = firstNameInputElement.value;
        let lastName = lastNameInputElement.value;
        let peopleCount = peopleCountElement.value;
        let fromDate = fromDateElement.value;
        let daysCount = daysCountElement.value;

        if(firstName === '' ||
        lastName === '' ||
        peopleCount === '' ||
        fromDate === '' ||
        daysCount === ''){
            return;
        }

        let liElement = document.createElement('li');
        liElement.setAttribute('class', 'ticket');

        let articleElement = document.createElement('article');

        let h3Element = document.createElement('h3');
        h3Element.textContent = `Name: ${firstName} ${lastName}`;

        let p1Element = document.createElement('p');
        p1Element.textContent = `From date: ${fromDate}`;

        let p2Element = document.createElement('p');
        p2Element.textContent = `For ${daysCount} days`;

        let p3Element = document.createElement('p');
        p3Element.textContent = `For ${peopleCount} people`;

        articleElement.appendChild(h3Element);
        articleElement.appendChild(p1Element);
        articleElement.appendChild(p2Element);
        articleElement.appendChild(p3Element);

        let editBtnElement = document.createElement('button');
        editBtnElement.setAttribute('class', 'edit-btn');
        editBtnElement.textContent = `Edit`;

        let continueBtnElement = document.createElement('button');
        continueBtnElement.setAttribute('class', 'continue-btn');
        continueBtnElement.textContent = `Continue`;

        liElement.appendChild(articleElement);
        liElement.appendChild(editBtnElement);
        liElement.appendChild(continueBtnElement);

        infoTicketULElement.appendChild(liElement);

        firstNameInputElement.value = '';
        lastNameInputElement.value = '';
        peopleCountElement.value = '';
        fromDateElement.value = '';
        daysCountElement.value = '';

        nextBtnElement.disabled = true;

        editBtnElement.addEventListener('click', () => {

            firstNameInputElement.value = firstName;
            lastNameInputElement.value = lastName;
            peopleCountElement.value = peopleCount;
            fromDateElement.value = fromDate;
            daysCountElement.value = daysCount;

            nextBtnElement.disabled = false;
            liElement.remove();
        });

        continueBtnElement.addEventListener('click', () => {

            confirmTicketUlElement.appendChild(liElement);
            editBtnElement.remove();
            continueBtnElement.remove();

            let confirmBtnElement = document.createElement('button');
            confirmBtnElement.setAttribute('class', 'confirm-btn');
            confirmBtnElement.textContent = `Confirm`;

            
            let cancelBtnElement = document.createElement('button');
            cancelBtnElement.setAttribute('class', 'cancel-btn');
            cancelBtnElement.textContent = `Cancel`;

            liElement.appendChild(confirmBtnElement);
            liElement.appendChild(cancelBtnElement);

            cancelBtnElement.addEventListener('click', () => {

                liElement.remove();
                nextBtnElement.disabled = false;
            });

            confirmBtnElement.addEventListener('click', () =>{

                mainDivElement.remove();

                let h1Element = document.createElement('h1');
                h1Element.setAttribute('id', 'thank-you');
                h1Element.textContent = "Thank you, have a nice day! ";

                let backBtnElement = document.createElement('button');
                backBtnElement.setAttribute('id', 'back-btn');
                backBtnElement.textContent = 'Back';

                bodyElement.appendChild(h1Element);
                bodyElement.appendChild(backBtnElement);

                backBtnElement.addEventListener('click', () => {
                    location.reload()
                })
            })

        })
    }

}


    
    
