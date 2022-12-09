function solve(array,target1, target2){

    let firstIndex = array.indexOf(target1);
    let secondIndex = array.indexOf(target2);
    let resultArray = array.slice(firstIndex,secondIndex+1);
    return resultArray;

}

solve(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
)