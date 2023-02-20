class WineSelection {
    constructor(space) {
        this.space = space,
        this.wines = [],
        this.bill = 0
    }

    reserveABottle(wineName, wineType, price) {

        let numberOfWines = this.wines.length;
        if (numberOfWines >= this.space) {
            throw new Error("Not enough space in the cellar.")
        }

        let wine = {
            wineName,
            wineType,
            price,
            paid: false
        }

        this.wines.push(wine);

        return `You reserved a bottle of ${wineName} ${wineType} wine.`
    }

    payWineBottle( wineName, price ){

        let wineCheck = this.wines.find((w) => w.wineName === wineName);

        if(!wineCheck){
            throw new Error(`${wineName} is not in the cellar.`)
        }

        if(wineCheck.paid === true){
            throw new Error(`${wineName} has already been paid.`)
        }

        wineCheck.paid = true;
        this.bill += price;
        return `You bought a ${wineName} for a ${price}$.`
    }

    openBottle(wineName){

        let wineCheck = this.wines.find((w) => w.wineName === wineName);

        if(!wineCheck){
            throw new Error("The wine, you're looking for, is not found.")
        }

        if(wineCheck.paid === false){
            throw new Error(`${wineName} need to be paid before open the bottle.`)
        }

        let indexOfWine = this.wines.indexOf(wineCheck);
        this.wines.splice(indexOfWine,1);

        return `You drank a bottle of ${wineName}.`
    }

    cellarRevision(wineType){

        let result = [];
        let emptySlots = this.space - this.wines.length;
        
        let isItPaied = 'Has Paid'
        
        if(!wineType){

            result.push(`You have space for ${ emptySlots } bottles more.`);
            result.push(`You paid ${this.bill}$ for the wine.`);

            this.wines.sort((a,b) => a.wineName.localeCompare(b.wineName));
            this.wines.forEach((wine) => {
                if(wine.paid == false){
                    isItPaied = 'Not Paid'
                }
                result.push(`${wine.wineName} > ${wine.wineType} - ${isItPaied}.`)
            });

            return result.join('\n');
        }else{
            let foundType = this.wines.find(wine => wine.wineType == wineType);

            if(!foundType){
                throw new Error(`There is no ${wineType} in the cellar.`)
            }

            if(foundType.paid == false){
                isItPaied = 'Not Paid'
            }
            return `${foundType.wineName} > ${foundType.wineType} - ${isItPaied}.`
        }
    }
}

const selection = new WineSelection(2)
console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144)); 
console.log(selection.cellarRevision('Rose'));


