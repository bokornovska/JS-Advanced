function aggregateElements(input){

    let first=0;
    let second = 0;
    let third = ""
    for(let i = 0;i<input.length;i++){
        let number = Number(input[i]);
        first += number;
        second+= (1/number);
        third+=number;
    }
    console.log(first);
    console.log(second);
    console.log(third)

}

aggregateElements([1, 2, 3])
aggregateElements([2, 4, 8, 16])