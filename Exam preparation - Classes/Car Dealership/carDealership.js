class CarDealership {

    constructor(name) {

        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;

    }

    addCar(model, horsepower, price, mileage) {

        if (model === "" || horsepower < 0 || price < 0 || mileage < 0) {
            throw new Error("Invalid input!");
        }

        let car = {
            model,
            horsepower,
            price,
            mileage,
        };

        this.availableCars.push(car);
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
    }

    sellCar(model, desiredMileage) {

        let carToSell = this.availableCars.find((c) => c.model === model);

        if (this.availableCars.includes(carToSell) === false) {
            throw new Error(`${model} was not found!`)
        }

        let soldPrice = 0;
        let differrence = carToSell.mileage - desiredMileage;

        if (differrence < 0) {
            soldPrice = carToSell.price;
        } else if (differrence <= 40000) {
            soldPrice = carToSell.price - carToSell.price * 0.05;
        } else if (differrence > 40000) {
            soldPrice = carToSell.price - carToSell.price * 0.10;
        }

        let indexOfCar = this.availableCars.indexOf(carToSell);
        this.availableCars.splice(indexOfCar, 1);

        let horsepower = carToSell.horsepower;

        let soldCar = { model, horsepower, soldPrice };
        this.soldCars.push(soldCar);

        this.totalIncome += soldPrice;

        return `${model} was sold for ${soldPrice.toFixed(2)}$`

    }
    currentCar() {

        if (this.availableCars.length === 0) {
            return "There are no available cars"
        } else {
                  
            let result = this.availableCars.map((c) => `---${c.model} - ${c.horsepower} HP - ${c.mileage.toFixed(2)} km - ${c.price.toFixed(2)}$`);
            
            result.unshift(`-Available cars:`);
            return result.join('\n')
        }
    }
    salesReport (criteria) {

        let result = [];
        result.push(`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`);
        result.push(`-${this.soldCars.length} cars sold:`);

        if(criteria === "model"){
            this.soldCars.sort((a, b) => a.model.localeCompare(b.model)).map(c => result.push(`---${c.model} - ${c.horsepower} HP - ${c.soldPrice.toFixed(2)}$`));
        }else if(criteria === "horsepower"){
            this.soldCars.sort((a, b) => b.horsepower - a.horsepower).map(c => result.push(`---${c.model} - ${c.horsepower} HP - ${c.soldPrice.toFixed(2)}$`));
        }else{
            throw new Error ("Invalid criteria!")
        }

        return result.join('\n')
    }
}



let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));


