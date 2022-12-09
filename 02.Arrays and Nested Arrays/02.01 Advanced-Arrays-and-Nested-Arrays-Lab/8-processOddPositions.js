function solve(input){

    let result=[];

    for(let i = 0;i<input.length;i++){
        if(i%2 !== 0){
            result.push(input[i])
        }
    }
    let final = result.reverse().map(el => el*2)

    return final.join(' ')

}

solve([10, 15, 20, 25])