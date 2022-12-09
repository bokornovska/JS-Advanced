function sumFirstAndLast(array){

    // let sum = Number(array[0])+ Number(array[array.length-1]);
    // console.log(sum)

    let first = Number(array.shift());
    let last = Number(array.pop());       //|| 0;
    let sum = first+last;
    console.log(sum)

}

sumFirstAndLast(['20', '30', '40'])