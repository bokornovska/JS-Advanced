function lastKNumbers(n, k) {

    let result = [1];

    for(let i = 1; i < n; i++){

        result[i] = sumLastK(result, k);

    }

    function sumLastK(array = result, k) {

        k = array.length > k ? k : array.length;

        let sum = 0;

        for(let i = 1; i <= k; i++){

            sum += array[array.length - i];

        }

        return sum;

    }

    return result;

}
    // 6, 3	[1, 1, 2, 4, 7, 13]		8, 2	[1, 1, 2, 3, 5, 8, 13, 21]


    lastKNumbers(6, 3)