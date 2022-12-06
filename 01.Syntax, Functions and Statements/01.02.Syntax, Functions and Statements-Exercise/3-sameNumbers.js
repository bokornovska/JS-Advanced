function sameNumbers(input){

    let string = input.toString();
    let boolean = true;
    let sum = 0;
    
    let digitToComapre = Number(string[0]);
    
    for(let i = 0;i < string.length;i++){
        let currentDigit = Number(string[i]);
        sum+=currentDigit;
        

        if(currentDigit !== digitToComapre){
            boolean = false;
        }
    }
    console.log(boolean);
    console.log(sum);


}

sameNumbers(2222222)
sameNumbers(1234)