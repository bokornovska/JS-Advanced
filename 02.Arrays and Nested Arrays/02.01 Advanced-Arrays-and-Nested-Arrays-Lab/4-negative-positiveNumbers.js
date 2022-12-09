function solve(input){
let newArray = [];

for(let i = 0;i < input.length;i++){
    if(input[i]<0){
        newArray.unshift(input[i])
    }else{
        newArray.push(input[i])
    }
}
for (let el of newArray){
    console.log(el)
}
}

solve([7, -2, 8, 9])