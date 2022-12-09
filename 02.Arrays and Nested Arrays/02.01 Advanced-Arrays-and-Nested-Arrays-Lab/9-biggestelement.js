function solve(input){

    let largestNumber = Number.MIN_SAFE_INTEGER;

    for(let i=0;i<input.length;i++){
        let currentArray = input[i]; //[20, 50, 10] // [8, 33, 145]
        for(let n = 0; n < currentArray.length; n++){
            let currentElement = currentArray[n];

            if(currentElement>=largestNumber){
                largestNumber = currentElement;
            }
        }
    }
return largestNumber;
// console.log(largestNumber)


}

solve([[20, 20, 20],
    [20, 20, 20]]
   )

   solve([[20, 50, 10],
    [8, 33, 145]]
   )