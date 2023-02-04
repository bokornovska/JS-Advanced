class Garden {

    constructor(spaceAvailable) {

        this.spaceAvailable = Number(spaceAvailable);
        this.plants = [];
        this.storage = [];

    }

    addPlant(plantName, spaceRequired) {

        if (this.spaceAvailable < spaceRequired) {
            throw new Error("Not enough space in the garden.")
        } else {
            let plant = {
                plantName,
                spaceRequired,
                ripe: false,
                quantity: 0,
            };
            this.plants.push(plant);
            this.spaceAvailable -= spaceRequired;
            // console.table(this.plants)
            return `The ${plantName} has been successfully planted in the garden.`
        }
    }

    ripenPlant(plantName, quantity) {

        let plant = this.plants.find((p) => p.plantName === plantName);

        if (this.plants.includes(plant) === false) {
            throw new Error(`There is no ${plantName} in the garden.`)
        }

        if (plant.ripe === true) {
            throw new Error(`The ${plantName} is already ripe.`);
        }

        if (quantity <= 0) {
            throw new Error("The quantity cannot be zero or negative.")
        }

        plant.ripe = true;
        plant.quantity += quantity;

        if (quantity === 1) {
            return `${quantity} ${plantName} has successfully ripened.`
        } else if (quantity > 1) {
            return `${quantity} ${plantName}s have successfully ripened.`
        }

    }

    harvestPlant(plantName) {

        let plant = this.plants.find((p) => p.plantName === plantName);

        if (this.plants.includes(plant) === false) {
            throw new Error(`There is no ${plantName} in the garden.`)
        }

        if (plant.ripe === false) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)
        }

        let indexOfPlant = this.plants.indexOf(plant);
        this.plants.splice(indexOfPlant, 1);


        let harvestedPlant = {                                          // Създаваме променлива за събраното растение 
            plantName,                                                    // То има пропърти подаденото име 
            quantity: plant.quantity,                                     // Количество, което е равно на неговото
        };

        this.storage.push(harvestedPlant);

        this.spaceAvailable += plant.spaceRequired;                     // Освобождаме място, с толкова колкото му е било нужно 
        return `The ${plantName} has been successfully harvested.`;

    }


    generateReport() {

        let result = [];
        result.push(`The garden has ${this.spaceAvailable} free space left.`)

        let plantsInGarden = this.plants.map((plant) => plant.plantName);
        // Минаваме по масива с растенията, които са обекти и чрез map модифицираме масива, като изваждаме само имената и получаваме нов масив 
        plantsInGarden.sort((a, b) => a.localeCompare(b));                      // Сортираме ги по имена във възходящ ред
        let secondRow = `Plants in the garden: ${plantsInGarden.join(", ")}`;   
        result.push(secondRow);   
        
        if(this.storage.length == 0){
            let message = "Plants in storage: The storage is empty."
            result.push(message);
        }else{
            let plantsInStorage = this.storage.map((p) => `${p.plantName} (${p.quantity})`);
            let thirdRow = `Plants in storage: ${plantsInStorage.join(", ")}`;  
            result.push(thirdRow)
        }
        
        return result.join("\n"); 

    }
}


const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());

