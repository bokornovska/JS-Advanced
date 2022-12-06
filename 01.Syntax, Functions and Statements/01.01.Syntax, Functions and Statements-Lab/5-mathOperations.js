function mathOperations(firstNumber, secondNumber, string) {

    switch (string) {
        case '+':
            console.log(firstNumber + secondNumber);
            break;
        case '-':
            console.log(firstNumber - secondNumber)
            break;

        case '*':
            console.log(firstNumber * secondNumber)
            break;

        case '/':
            console.log(firstNumber / secondNumber)
            break;

        case '%':
            console.log(firstNumber % secondNumber)
            break;

        case '**':
            console.log(firstNumber ** secondNumber)

            break;


    }

}
// The string may be one of the following: '+', '-', '*', '/', '%', '**'.
mathOperations(5, 6, '+')
mathOperations(3, 5.5, '*')