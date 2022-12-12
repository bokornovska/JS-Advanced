function calc() {
    // TODO: sum = num1 + num2
    let firstNumberElement = document.getElementById('num1');
    let secondNumberelement = document.getElementById('num2');

    let firstNumber = Number(firstNumberElement.value);
    let secondNumber = Number(secondNumberelement.value);

    let sum = firstNumber+secondNumber;

    let resultElement = document.getElementById('sum');
    resultElement.value = sum
}
