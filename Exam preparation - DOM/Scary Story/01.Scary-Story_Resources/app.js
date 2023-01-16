window.addEventListener("load", solve);

function solve() {


  let firstNameInputElement = document.getElementById('first-name');
  let lastNameInputElement = document.getElementById('last-name');
  let ageInputElement = document.getElementById('age');
  let storyTitleInputElement = document.getElementById('story-title');
  let genreInputElement = document.getElementById('genre');
  let storyInputElement = document.getElementById('story');

  let publishBtn = document.getElementById('form-btn');

  let ulPreviewElement = document.getElementById('preview-list');
  let mainDivElement = document.getElementById('main');



  publishBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (firstNameInputElement.value == '' ||
      lastNameInputElement.value == '' ||
      ageInputElement.value == '' ||
      storyTitleInputElement.value == '' ||
      storyInputElement.value == '') {
      return;
    };

    let firstName = firstNameInputElement.value;
    let lastName = lastNameInputElement.value;
    let age = ageInputElement.value;
    let title = storyTitleInputElement.value;
    let genre = genreInputElement.value;
    let story = storyInputElement.value;

    let liPreviewElement = document.createElement('li');
    liPreviewElement.setAttribute('class', 'story-info');

    let articleElement = document.createElement('article');

    let nameElement = document.createElement('h4');
    nameElement.textContent = `Name: ${firstName} ${lastName}`

    let ageElement = document.createElement('p');
    ageElement.textContent = `Age: ${age}`;

    let titleElement = document.createElement('p');
    titleElement.textContent = `Title: ${title}`;

    let genreElement = document.createElement('p');
    genreElement.textContent = `Genre: ${genre}`;

    let storyElement = document.createElement('p');
    storyElement.textContent = `${storyInputElement.value}`;

    // buttons

    let saveBtnElement = document.createElement('button');
    saveBtnElement.setAttribute('class', 'save-btn');
    saveBtnElement.textContent = `Save Story`;

    let editBtnElement = document.createElement('button');
    editBtnElement.setAttribute('class', 'edit-btn');
    editBtnElement.textContent = `Edit Story`;

    let deleteBtnElement = document.createElement('button');
    deleteBtnElement.setAttribute('class', 'delete-btn');
    deleteBtnElement.textContent = `Delete Story`;

    articleElement.appendChild(nameElement);
    articleElement.appendChild(ageElement);
    articleElement.appendChild(titleElement);
    articleElement.appendChild(genreElement);
    articleElement.appendChild(storyElement);


    liPreviewElement.appendChild(articleElement)

    liPreviewElement.appendChild(saveBtnElement);
    liPreviewElement.appendChild(editBtnElement);
    liPreviewElement.appendChild(deleteBtnElement);

    ulPreviewElement.appendChild(liPreviewElement);

    firstNameInputElement.value = '';
    lastNameInputElement.value = '';
    ageInputElement.value = '';
    storyTitleInputElement.value = '';
    storyInputElement.value = '';

    publishBtn.disabled = true;

    // Edit Button

    editBtnElement.addEventListener('click', (e) => {

      firstNameInputElement.value = firstName;
      lastNameInputElement.value = lastName;
      ageInputElement.value = age;
      storyTitleInputElement.value = title;
      genreInputElement.value = genre;
      storyInputElement.value = story;

      publishBtn.disabled = false;
      saveBtnElement.disabled = true;
      editBtnElement.disabled = true;
      deleteBtnElement.disabled = true;

      liPreviewElement.remove();

    });

    //save button
    saveBtnElement.addEventListener('click', (e) => {

      mainDivElement.innerHTML = '';

      let h1Element = document.createElement('h1');
      h1Element.textContent = `Your scary story is saved!`;

      mainDivElement.appendChild(h1Element);
      
    });

    //delete button
    deleteBtnElement.addEventListener('click', (e) => {

      liPreviewElement.remove();
      publishBtn.disabled = false;
    });

  });

}
