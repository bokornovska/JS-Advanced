function squareOfStars(input = 5) {

    let numberSquare = input;
    let stringSquare = '';
    for (let i = 1; i <= numberSquare; i++) {
        for (let j = 1; j <= numberSquare; j++) {
            stringSquare += '* ';
        }
        stringSquare += '\n';
    }
    console.log(stringSquare);

}

squareOfStars()

