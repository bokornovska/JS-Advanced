function biggerHalf(input){

    input.sort((a,b)=>a-b);
    // console.log(input);
    let middle = Math.floor(input.length/2);
    // console.log(middle)
    let result = input.slice(middle);
    return result;

}

biggerHalf([3, 19, 14, 7, 2, 19, 6])