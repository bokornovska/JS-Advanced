function solve(input){

    input.sort((a,b) => a-b)
    
    let result = input.slice(0,2);

    console.log(result.join(' '))
   
   

}

solve([30, 15, 50, 5])
