function solve(input) {

    let sorted = input.sort((a, b) => a - b);
    // console.log(sorted);

    let result = [];

    while (sorted.length > 0) {
        let first = sorted.shift();
        result.push(first);
        let last = sorted.pop();
        result.push(last)
    }
    let finalResult = result.filter((el) => {
        return typeof el !== 'undefined';
    });

    return finalResult;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])
