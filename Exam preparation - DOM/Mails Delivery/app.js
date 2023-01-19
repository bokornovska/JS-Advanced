function solve() {

    let nameInputElement = document.getElementById('recipientName');
    let titleInputElement = document.getElementById('title');
    let messageInputElement = document.getElementById('message');

    let addBtnelement = document.getElementById('add');
    let resetBtnElement = document.getElementById('reset');

    let ulListMailselement = document.getElementById('list');
    let ulSendElement = document.querySelector('.sent-list');
    let ulDeleteElement = document.querySelector('.delete-list')

    resetBtnElement.addEventListener('click', onReset);

    function onReset(e) {

        e.preventDefault();
        nameInputElement.value = '';
        titleInputElement.value = '';
        messageInputElement.value = '';
    }

    addBtnelement.addEventListener('click', onAdd);

    function onAdd(e) {

        e.preventDefault();

        let name = nameInputElement.value;
        let title = titleInputElement.value;
        let message = messageInputElement.value;

        if (name == '' || title == '' || message == '') {
            return;
        }

        let liElement = document.createElement('li');

        let h4TitleElement = document.createElement('h4');
        h4TitleElement.textContent = `Title: ${title}`;

        let h4NameElement = document.createElement('h4');
        h4NameElement.textContent = `Recipient Name: ${name}`;

        let spanElement = document.createElement('span');
        spanElement.textContent = `${message}`;

        let divElement = document.createElement('div');
        divElement.setAttribute('id', 'list-action');

        let sendBtnelement = document.createElement('button');
        sendBtnelement.setAttribute('id', 'send');
        sendBtnelement.textContent = 'Send';

        let deleteBtnElement = document.createElement('button');
        deleteBtnElement.setAttribute('id', 'delete');
        deleteBtnElement.textContent = 'Delete';

        divElement.appendChild(sendBtnelement);
        divElement.appendChild(deleteBtnElement);

        liElement.appendChild(h4TitleElement);
        liElement.appendChild(h4NameElement);
        liElement.appendChild(spanElement);
        liElement.appendChild(divElement);

        ulListMailselement.appendChild(liElement);

        sendBtnelement.addEventListener('click', onSend);

        nameInputElement.value = '';
        titleInputElement.value = '';
        messageInputElement.value = '';

        function onSend(e) {

            let liSendElement = document.createElement('li');

            let spanNameElement = document.createElement('span');
            spanNameElement.textContent = `To: ${name}`;

            let spanTitleElement = document.createElement('span');
            spanTitleElement.textContent = `Title: ${title}`;

            let divSendElement = document.createElement('button');
            divSendElement.setAttribute('class', 'btn');

            let delete2BtnElement = document.createElement('button');
            delete2BtnElement.setAttribute('class', 'delete');
            delete2BtnElement.textContent = 'Delete';

            divSendElement.appendChild(delete2BtnElement);
            liSendElement.appendChild(spanNameElement);
            liSendElement.appendChild(spanTitleElement);
            liSendElement.appendChild(divSendElement);

            ulSendElement.appendChild(liSendElement);

            liElement.remove();

            delete2BtnElement.addEventListener('click', onDelete2);

            function onDelete2(e) {

                let liDeleteElement = document.createElement('li');

                let spanNameElement = document.createElement('span');
                spanNameElement.textContent = `To: ${name}`;

                let spanTitleElement = document.createElement('span');
                spanTitleElement.textContent = `Title: ${title}`;

                liDeleteElement.appendChild(spanNameElement);
                liDeleteElement.appendChild(spanTitleElement);

                ulDeleteElement.appendChild(liDeleteElement);

                liSendElement.remove();
            }
        };

        deleteBtnElement.addEventListener('click', onDelete);

        function onDelete(e) {

            let liDeleteElement = document.createElement('li');

            let spanNameElement = document.createElement('span');
            spanNameElement.textContent = `To: ${name}`;

            let spanTitleElement = document.createElement('span');
            spanTitleElement.textContent = `Title: ${title}`;

            liDeleteElement.appendChild(spanNameElement);
            liDeleteElement.appendChild(spanTitleElement);

            ulDeleteElement.appendChild(liDeleteElement);

            liElement.remove();

        }


    }
}
solve()