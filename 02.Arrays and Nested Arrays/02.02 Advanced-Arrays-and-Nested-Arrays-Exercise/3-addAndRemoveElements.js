function solve(array){

    let resultArr = [];

    for(let i = 0;i<array.length;i++){

        let currentCommand = array[i]

        if(currentCommand === 'add'){
            resultArr.push(i+1);
        }else if(currentCommand === 'remove'){
            resultArr.pop();
        }
    }

    if(resultArr.length === 0){
        console.log('Empty')
    }else{
        console.log(resultArr.join('\n'))
    }

}

solve(['add', 
'add', 
'remove', 
'add', 
'add']
)