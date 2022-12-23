function area() {
    return Math.abs(this.x * this.y);
};
function vol() {
    return Math.abs(this.x * this.y * this.z);
};
function solve(area, vol, input) {

    let coordinates = JSON.parse(input); // string => array of objects
    // console.log(coordinates)

    let result = [];
    for (let points of coordinates) {
        result.push({
            area: area.call(points),
            volume: vol.call(points)
        })
    }

    return result
}

function fancySolve(area, vol, input) {
    return JSON.parse(input)
        .map(x => ({
                area: area.call(x),
                volume: vol.call(x),
            })
        );
}

solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`)