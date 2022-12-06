function solve(input){

    let pattern = /\w+/gm;

    let matches = pattern.exec(input);
    let arrOfMatches = [];

    while(matches){
        arrOfMatches.push(matches[0].toUpperCase());
        matches = pattern.exec(input);
    }
    
    let result = arrOfMatches.join(', ')
    console.log(result)
}

solve('Hi, how are you?')