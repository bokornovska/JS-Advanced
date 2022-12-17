function validate() {

    let emailElement = document.getElementById('email');
    emailElement.addEventListener('change', onChange);

    function onChange(event){

        let pattern = /^[a-z]+@[a-z]+\.[a-z]+$/g;

        if(pattern.test(event.target.value)){           //ако в патърна се съдържа стринга въведен в полето
            event.target.classList.remove('error');     //махаме класа error
        }else{                                          //ако не
            event.target.classList.add('error')         // добавяме класа error
        }
    }
}