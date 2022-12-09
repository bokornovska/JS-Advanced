function evenPositionElement(input){

    let array = [];
    for(let i = 0;i<input.length;i++){
        if(i%2 == 0){
            array.push(input[i])
        }
    }
    console.log(array.join(' '))

}

evenPositionElement(['20', '30', '40', '50', '60'])