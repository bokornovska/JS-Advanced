function coocking(number, one, two, three, four, five) {

    let num = Number(number);
    
    let arrayOfCommands = [one, two, three, four, five];

    let chop = function () {
        return num / 2;
    };
    let dice = function () {
        return Math.sqrt(num);
    };
    let spice = function () {
        return num + 1;
    };
    let bake = function () {
        return num * 3;
    };
    let fillet = function () {
        return num * 0.8;
    };

    for (let i = 0; i < arrayOfCommands.length; i++) {
        
        let currentCommand = arrayOfCommands[i];
        
        switch (currentCommand) {
            case "chop":
                num = chop(num);
                console.log(num);
                break;
            case "dice":
                num = dice(num);
                console.log(num);
                break;
            case "spice":
                num = spice(num);
                console.log(num);
                break;
            case "bake":
                num = bake(num);
                console.log(num);
                break;
            case "fillet":
                num = fillet(num);
                console.log(num.toFixed(1));
                break;
        }
    }

}

coocking('32', 'chop', 'chop', 'chop', 'chop', 'chop')
coocking('9', 'dice', 'spice', 'chop', 'bake', 'fillet')