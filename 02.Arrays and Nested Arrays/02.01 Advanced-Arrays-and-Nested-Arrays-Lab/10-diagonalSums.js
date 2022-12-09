function solve(matrix){

    let mainDiagonal = 0;
    let secondaryDiagonal = 0;
    let firstIndex = -1;
    let lastIndex = matrix[0].length;

    for (let row = 0; row < matrix.length; row++) {
        firstIndex++;
        lastIndex--;
        secondaryDiagonal += matrix[firstIndex][lastIndex];

        for (let col = 0; col < matrix.length; col++) {
            if (row === col) {
                mainDiagonal += matrix[row][col];
            }
        }

    }
    
    console.log(`${mainDiagonal} ${secondaryDiagonal}`);
}

solve([[20, 40],
    [10, 60]]
   )