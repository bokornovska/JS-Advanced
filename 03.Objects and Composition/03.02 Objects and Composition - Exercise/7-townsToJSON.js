function solve(array){

    let towns = [];

    for (let i = 1; i < array.length; i++) {
        let [town, latitude, longitude] = array[i]
            .split("|")
            .filter((el) => el.length !== 0)
            .map((el) => el.trim());
        towns.push({
            Town: town,
            Latitude: Number(Number(latitude).toFixed(2)),
            Longitude: Number(Number(longitude).toFixed(2)),
        });
    }
    console.log(JSON.stringify(towns));

}

solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |'])