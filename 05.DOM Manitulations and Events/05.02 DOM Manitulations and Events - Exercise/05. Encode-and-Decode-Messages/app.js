function encodeAndDecodeMessages() {
    let textAreaElements = document.querySelectorAll('textarea');   // Взимаме полетата за съобщенията
    let buttonElements = document.querySelectorAll('button');       // Взимаме бутоните на полетата

    buttonElements[0].addEventListener('click', encode);
    buttonElements[1].addEventListener('click', decode);

    function encode(event) {

        let encodedMessage = "";                                    // Първоначално енкодираното съобщение е празно
        let input = textAreaElements[0].value;                      // Взимаме въведената стойност в първото поле

        for (let i = 0; i < input.length; i++) {                      // Минаваме по целия инпут
            encodedMessage += String.fromCharCode(input[i].charCodeAt() + 1);
        }                                    // Към съобщението добавяме всяка буква(нейния ASCII + 1) превърната пак в буква

        textAreaElements[1].value = encodedMessage;         // В другото поле изписваме енкодираоато съобщение
        textAreaElements[0].value = '';                     // зачистваме полето да е празно

    }

    function decode(event) {

        decodedMessage = '';
        let input = textAreaElements[1].value;

        for (let i = 0; i < input.length; i++) {                      
            decodedMessage += String.fromCharCode(input[i].charCodeAt(0) - 1);
        }

        textAreaElements[1].value = decodedMessage;
    }


}