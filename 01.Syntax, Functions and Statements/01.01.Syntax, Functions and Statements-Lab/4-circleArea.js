function circleArea(input){

    let circleArea = Math.PI*input**2;
    let bool = typeof(input);
    
    if(bool == 'number'){
        console.log(circleArea.toFixed(2));
    }else{
        console.log(`We can not calculate the circle area, because we receive a ${bool}.`)
    }

}

circleArea (5)
circleArea('name')