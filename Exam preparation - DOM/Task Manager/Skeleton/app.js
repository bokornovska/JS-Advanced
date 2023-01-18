function solve() {

    let taskElement = document.getElementById('task');
    let descriptionElement = document.getElementById('description');
    let dateElement = document.getElementById('date');

    //select sections-div
    const openArea = document.querySelectorAll('section')[1].querySelectorAll('div')[1];
    const progressArea = document.querySelectorAll('section')[2].querySelectorAll('div')[1];
    const completeArea = document.querySelectorAll('section')[3].querySelectorAll('div')[1];

    let addButtonElement = document.getElementById('add');

    addButtonElement.addEventListener('click', onAdd);

    function onAdd(e) {

        e.preventDefault();

        let task = taskElement.value;
        let description = descriptionElement.value;
        let date = dateElement.value;

        if (task == '' || description == '' || date == '') {
            return;
        }

        let articleOpenElement = document.createElement('article');

        const h3 = document.createElement('h3');
        h3.textContent = task;
        const p1 = document.createElement('p');
        p1.textContent = `Description: ${description}`;
        const p2 = document.createElement('p');
        p2.textContent = `Due Date: ${date}`;

        articleOpenElement.appendChild(h3);
        articleOpenElement.appendChild(p1);
        articleOpenElement.appendChild(p2);

        const divEl = document.createElement('div');
        divEl.className = 'flex';

        const startBtn = document.createElement('button');
        startBtn.textContent = 'Start';
        startBtn.className = 'green';

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'red';

        divEl.appendChild(startBtn);
        divEl.appendChild(deleteBtn);

        articleOpenElement.appendChild(divEl);
        openArea.appendChild(articleOpenElement);

        startBtn.addEventListener('click', onStart);
        deleteBtn.addEventListener('click', (e) => {
            articleOpenElement.remove();
        })

        function onStart(e) {

            let articleProgressElement = document.createElement('article');

            const h3 = document.createElement('h3');
            h3.textContent = task;
            const p1 = document.createElement('p');
            p1.textContent = `Description: ${description}`;
            const p2 = document.createElement('p');
            p2.textContent = `Due Date: ${date}`;

            const divEl2 = document.createElement('div');
            divEl2.className = 'flex';

            const deletetBtn = document.createElement('button');
            deletetBtn.textContent = 'Delete';
            deletetBtn.className = 'red';

            const finishBtn = document.createElement('button');
            finishBtn.textContent = 'Finish';
            finishBtn.className = 'orange';

            divEl2.appendChild(deletetBtn);
            divEl2.appendChild(finishBtn);

            articleProgressElement.appendChild(h3);
            articleProgressElement.appendChild(p1);
            articleProgressElement.appendChild(p2);
            articleProgressElement.appendChild(divEl2);

            progressArea.appendChild(articleProgressElement);

            articleOpenElement.remove();

            deletetBtn.addEventListener('click', (e) => {
                articleProgressElement.remove();
            });

            finishBtn.addEventListener('click', (e) => {

                let articleFinishElement = document.createElement('article');


                const h3 = document.createElement('h3');
                h3.textContent = task;
                const p1 = document.createElement('p');
                p1.textContent = `Description: ${description}`;
                const p2 = document.createElement('p');
                p2.textContent = `Due Date: ${date}`;

                articleFinishElement.appendChild(h3);
                articleFinishElement.appendChild(p1);
                articleFinishElement.appendChild(p2);


                completeArea.appendChild(articleFinishElement);

                articleProgressElement.remove();

            })
        }

    }
}