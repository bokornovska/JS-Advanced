function subtract() {
    let firstNumberElement = document.getElementById('firstNumber');
    let secondNumberElement = document.getElementById('secondNumber');
    // console.log(firstNumberElement.value,secondNumberElement.value);
    let firstNumber = Number(firstNumberElement.value);
    let secondnumebr = Number(secondNumberElement.value);
    // console.log(firstNumber,secondnumebr);

    let resultElement = document.getElementById('result');
    let result = firstNumber-secondnumebr;
    resultElement.textContent = result;
    // console.log('TODO:...');
}