function solve(array){

    let myObject = {};

 for(let i = 0; i < array.length; i+=2){

    let [product, calories] = [array[i], array[i + 1]];
    myObject[product] = Number(calories);

 }
 console.log(myObject)
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])