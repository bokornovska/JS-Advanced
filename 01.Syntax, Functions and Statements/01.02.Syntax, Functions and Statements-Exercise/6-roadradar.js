function radar(speed, way) {

    let limit = 0;
    let difference = 0;
    let status = '';

    switch (way) {

        case 'city':
            limit = 50;
            if (speed <= limit) {
                console.log(`Driving ${speed} km/h in a ${limit} zone`)
            } else {
                difference = speed - limit;
                if (difference <= 20) {
                    status = 'speeding'
                } else if (difference > 20 && difference <= 40) {
                    status = 'excessive speeding'
                } else {
                    status = 'reckless driving'
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`)
            };
            break;
        case 'residential':
            limit = 20;
            if (speed <= limit) {
                console.log(`Driving ${speed} km/h in a ${limit} zone`)
            } else {
                difference = speed - limit;
                if (difference <= 20) {
                    status = 'speeding'
                } else if (difference > 20 && difference <= 40) {
                    status = 'excessive speeding'
                } else {
                    status = 'reckless driving'
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
            };
            break;
        case 'interstate':
            limit = 90;
            if (speed <= limit) {
                console.log(`Driving ${speed} km/h in a ${limit} zone`)
            } else {
                difference = speed - limit;
                if (difference <= 20) {
                    status = 'speeding'
                } else if (difference > 20 && difference <= 40) {
                    status = 'excessive speeding'
                } else {
                    status = 'reckless driving'
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
            };
            break;
        case 'motorway':
            limit = 130;
            if (speed <= limit) {
                console.log(`Driving ${speed} km/h in a ${limit} zone`)
            } else {
                difference = speed - limit;
                if (difference <= 20) {
                    status = 'speeding'
                } else if (difference > 20 && difference <= 40) {
                    status = 'excessive speeding'
                } else {
                    status = 'reckless driving'
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
            };
            break;
    }

}

radar(40, 'city')
radar(21, 'residential')
radar(120, 'interstate')
radar(200, 'motorway')