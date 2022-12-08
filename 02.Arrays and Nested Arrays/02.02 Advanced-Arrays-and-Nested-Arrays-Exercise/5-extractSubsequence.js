function solve(array){

    let result = [array[0]];
    let current = array[0];

    for(let i = 1; i < array.length; i++){
        if(array[i]>=current){
            result.push(array[i]);
            current = array[i]
        }
    }
return result;
}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24])