function timeToWalk(steps, footprint, speedKMH) {

    // Every 500 meters the student rests and takes a 1-minute break.
    // format: `hours:minutes:seconds`.

    let distance = steps*footprint;
    // console.log(distance)

    let speed = speedKMH*1000/3600;
    let rest = Math.floor(distance/500)*60;
    // console.log(rest)
    let time = (distance/speed)+rest;
    // console.log(time)

    let hours = Math.floor(time/3600).toFixed(0).padStart(2,'0');
    let minutes = Math.floor(time/60).toFixed(0).padStart(2,'0');
    let seconds = (time%60).toFixed(0).padStart(2,'0');

    console.log(`${hours}:${minutes}:${seconds}`)

}

timeToWalk(4000, 0.60, 5)
timeToWalk(2564, 0.70, 5.5)