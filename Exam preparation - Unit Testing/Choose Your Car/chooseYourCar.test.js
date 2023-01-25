const { expect } = require("chai"); 
const { chooseYourCar } = require("./chooseYourCar");

describe("Testing chooseYourCar functionality", function() {

    describe("Testing choosingType functionality", function() {

        it("throw an error: Invalid Year!", function() {
            expect(() => chooseYourCar.choosingType("Sedan","sdf",1899)).to.throw(Error)
            expect(() => chooseYourCar.choosingType("Sedan","sdf",2023)).to.throw(Error)
            expect(() => chooseYourCar.choosingType("Combi","sdf",2021)).to.throw(Error)
        });

        it("If the year of the car is greater or equal to 2010-2015", function() {
            expect(chooseYourCar.choosingType("Sedan","red",2015)).to.equal("This red Sedan meets the requirements, that you have.")
        })
        it("If the year of the car is greater or equal to 2010-2010", function() {
            expect(chooseYourCar.choosingType("Sedan","red",2010)).to.equal("This red Sedan meets the requirements, that you have.")
        })
        it("If the year of the car is lower than 2010", function() {
            expect(chooseYourCar.choosingType("Sedan","red",2007)).to.equal("This Sedan is too old for you, especially with that red color.")
        })
     });

     describe("Testing brandName functionality", function() {
        it("throw an error: Invalid Information!", function() {
            expect(() => chooseYourCar.brandName("not array", 5)).to.throw(Error)
            expect(() => chooseYourCar.brandName(false,1)).to.throw(Error)
            expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"],"string")).to.throw(Error)
            expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"],false)).to.throw(Error)
            expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"],3)).to.throw(Error)
            expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"],2.1)).to.throw(Error)
            expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"],-1)).to.throw(Error)
        });
        it("test with valid params", () => {
            expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"],1)).to.equal("BMW, Peugeot")
        })
      
     });

     describe("Testing carFuelConsumption functionality", function() {

        it("throw an error: Invalid Information!", function() {
            expect(() => chooseYourCar.carFuelConsumption("not array", 5)).to.throw(Error);
            expect(() => chooseYourCar.carFuelConsumption("not array", "5")).to.throw(Error);
            expect(() => chooseYourCar.carFuelConsumption(5, "5")).to.throw(Error);

            expect(() => chooseYourCar.carFuelConsumption(1,false)).to.throw(Error);
            expect(() => chooseYourCar.carFuelConsumption(10,-15)).to.throw(Error);
            expect(() => chooseYourCar.carFuelConsumption(-10,15)).to.throw(Error);
            expect(() => chooseYourCar.carFuelConsumption(0, 5)).to.throw('Invalid Information!');
        });
        
        it("test with valid params", () => {
            expect(chooseYourCar.carFuelConsumption(100, 7)).to.equal("The car is efficient enough, it burns 7.00 liters/100 km.")
            expect(chooseYourCar.carFuelConsumption(100, 8)).to.equal("The car burns too much fuel - 8.00 liters!")
        })
      
     });
    
});






