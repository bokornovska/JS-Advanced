function focused() {

    // Намираме всички инпут полета, правим масив, минаваме по всяко поле
    Array.from(document.querySelectorAll('input')).forEach((input) => {
        input.addEventListener('focus', onFocus);
        input.addEventListener('blur', onBlur);
    });

    function onFocus(event) {
        // event.target.parentElement.className = "focused";           // Добавяме клас на родителя на маркираното поле да е focused
         event.target.parentElement.classList.add('focused');          // Добавяме НОВ клас на родителя на маркираното поле 
     }
 
     function onBlur(event) {
         //event.target.parentElement.className = "";              // Добавяме клас на родителя на маркираното поле да е празен стринг
         event.target.parentElement.classList.remove('focused');  // Премахваме КОНКРЕТЕН клас на родителя на маркираното поле 
     }

// className
//  работи за елементи, които имат само един клас. Ако няма клас добавя такъв, но ако има клас го премахва и слага новия


// classList 
// работи за елементи, които може да имат повече от един клас. Ако няма клас, пак добавя такъв, но ако има клас слага още един 
}