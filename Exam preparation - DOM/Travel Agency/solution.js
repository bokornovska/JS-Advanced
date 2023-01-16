window.addEventListener('load', solution);

function solution() {
  // console.log('TODO: Write the missing functionality!');
  let fullNameInputElement = document.getElementById('fname');
  let emailInputElement = document.getElementById('email');
  let phoneNumberInputElement = document.getElementById('phone');
  let adressInputElement = document.getElementById('address');
  let postalCodeInputElement = document.getElementById('code');

  let previewULElement = document.getElementById('infoPreview');

  //взимаме всички бутони:
  let submitButtonElement = document.getElementById('submitBTN');
  let editButtonElement = document.getElementById('editBTN');
  let continueButtonElement = document.getElementById('continueBTN');

  const blockElement = document.getElementById('block');




  //SUBMIT BUTTON FUNCTIONALITY
  submitButtonElement.addEventListener('click', (e) => {

    e.preventDefault();
    // console.log('btn clicked');

    if (fullNameInputElement.value == '' || emailInputElement == '') {
      return;
    };

    let name = fullNameInputElement.value;
    let email = emailInputElement.value;
    let phone = phoneNumberInputElement.value;
    let adress = adressInputElement.value;
    let postCode = postalCodeInputElement.value;

    //създаваме елементи и пълним с текст:
    let nameElement = document.createElement('li');
    nameElement.textContent = `Full Name: ${name}`;

    let emailElement = document.createElement('li');
    emailElement.textContent = `Email: ${email}`;

    let phoneNumberElement = document.createElement('li');
    phoneNumberElement.textContent = `Phone Number: ${phone}`;

    let adressElement = document.createElement('li');
    adressElement.textContent = `Address: ${adress}`;

    let postalCodeElement = document.createElement('li');
    postalCodeElement.textContent = `Postal Code: ${postCode}`;

    previewULElement.appendChild(nameElement);
    previewULElement.appendChild(emailElement);
    previewULElement.appendChild(phoneNumberElement);
    previewULElement.appendChild(adressElement);
    previewULElement.appendChild(postalCodeElement);

    e.target.disabled = true;
    editButtonElement.disabled = false;
    continueButtonElement.disabled = false;

    fullNameInputElement.value = '';
    emailInputElement.value = '';
    phoneNumberInputElement.value = '';
    adressInputElement.value = '';
    postalCodeInputElement.value = '';


    //EDIT BUTTON FUNCTIONALITY

    editButtonElement.addEventListener('click', (e) => {

      fullNameInputElement.value = name;
      emailInputElement.value = email;
      phoneNumberInputElement.value = phone;
      adressInputElement.value = adress;
      postalCodeInputElement.value = postCode;

      nameElement.remove();
      emailElement.remove();
      phoneNumberElement.remove();
      adressElement.remove();
      postalCodeElement.remove();

      e.target.disabled = true;
      submitButtonElement.disabled = false;
      continueButtonElement.disabled = true;
    });

    continueButtonElement.addEventListener('click', (e) => {

      Array.from(blockElement.childNodes).forEach((child) => child.remove());

      let message = document.createElement('h3');
      message.textContent = "Thank you for your reservation!";


      blockElement.appendChild(message)


    });
  });


}
