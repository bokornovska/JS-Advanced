function solve(input){

    let objTowns = {};

for(let i = 0;i < input.length; i++){
    let currentLine = input[i];
    let [town, population] = currentLine.split(' <-> ')
    
    if(!objTowns.hasOwnProperty(town)){
        
        objTowns[town] = Number(population);
    }else{
        objTowns[town] += Number(population);
    }
}
for(const [key,value] of Object.entries(objTowns)){
    console.log(`${key} : ${value}`)
}
}

solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']

)