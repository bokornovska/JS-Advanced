window.addEventListener("load", solve);

function solve() {

  let firstNameElement = document.getElementById('first-name');
  let lastNameElement = document.getElementById('last-name');
  let ageElement = document.getElementById('age');
  let genderElement = document.getElementById('genderSelect');
  let taskElement = document.getElementById('task');

  let submitBtnElement = document.getElementById('form-btn');
  let clearBtnelement = document.getElementById('clear-btn')

  let ulInProgressElement = document.getElementById('in-progress');
  let processCountElement = document.getElementById('progress-count');
  let ulFinishedelement = document.getElementById('finished');

  let liElement = document.getElementById('each-line')

  submitBtnElement.addEventListener('click', onSubmit);

  function onSubmit(e) {
    e.preventDefault();

    let firstName = firstNameElement.value;
    let lastName = lastNameElement.value;
    let age = ageElement.value;
    let task = taskElement.value;
    let gender = genderElement.value;

    if (firstName == '' || lastName == '' || age == '' || task == '') {
      return;
    };

    let liElement = document.createElement('li');
    liElement.setAttribute('class', 'each-line');

    let articleElement = document.createElement('article');

    let h4Element = document.createElement('h4');
    h4Element.textContent = `${firstName} ${lastName}`;

    let pElement = document.createElement('p');
    pElement.textContent = `${gender}, ${age}`;

    let pTaskElement = document.createElement('p');
    pTaskElement.textContent = `Dish description: ${task}`;

    let editBtnElement = document.createElement('button');
    editBtnElement.setAttribute('class', 'edit-btn');
    editBtnElement.textContent = 'Edit';

    let completeBtnElement = document.createElement('button');
    completeBtnElement.setAttribute('class', 'complete-btn');
    completeBtnElement.textContent = 'Mark as complete';


    articleElement.appendChild(h4Element);
    articleElement.appendChild(pElement);
    articleElement.appendChild(pTaskElement);

    liElement.appendChild(articleElement);
    liElement.appendChild(editBtnElement);
    liElement.appendChild(completeBtnElement);

    ulInProgressElement.appendChild(liElement);


    processCountElement.textContent = Number(processCountElement.textContent) + 1;

    firstNameElement.value = ''
    lastNameElement.value = ''
    ageElement.value = ''
    taskElement.value = ''


    editBtnElement.addEventListener('click', onEdit);

    function onEdit(e) {

      firstNameElement.value = firstName;
      lastNameElement.value = lastName;
      ageElement.value = age;
      taskElement.value = task;
      genderElement.value = gender;

      liElement.remove();

      processCountElement.textContent = Number(processCountElement.textContent) - 1;
    };

    completeBtnElement.addEventListener('click', onComplete);

    function onComplete(e) {

      liElement.remove();

      let finishedLiElement = document.createElement('li');
      finishedLiElement.setAttribute('class', 'each-line');

      let articleElement = document.createElement('article');

      let h4Element = document.createElement('h4');
      h4Element.textContent = `${firstName} ${lastName}`;

      let pElement = document.createElement('p');
      pElement.textContent = `${gender}, ${age}`;

      let pTaskElement = document.createElement('p');
      pTaskElement.textContent = `Dish description: ${task}`;

      articleElement.appendChild(h4Element);
      articleElement.appendChild(pElement);
      articleElement.appendChild(pTaskElement);

      finishedLiElement.appendChild(articleElement);

      ulFinishedelement.appendChild(finishedLiElement);

      processCountElement.textContent = Number(processCountElement.textContent) - 1;

      clearBtnelement.addEventListener('click', onClear);

      function onClear(e) {

        finishedLiElement.remove();
      }
    };


  }
}
