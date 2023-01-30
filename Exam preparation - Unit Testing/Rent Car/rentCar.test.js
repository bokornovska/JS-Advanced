const { expect } = require("chai");
const { assert } = require("chai");

const { rentCar } = require("./rentCar");

describe("Testing rentCar functionality", function() {

    describe("Testing searchCar functionality", function() {

        it("Testing with invalid params", function() {
            expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 10)).to.throw("Invalid input");
            expect(() => rentCar.searchCar(10, ["Volkswagen", "BMW", "Audi"])).to.throw("Invalid input");
            expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], "Lada")).to.throw('There are no such models in the catalog!');
            expect(() => rentCar.searchCar([], "Lada")).to.throw('There are no such models in the catalog!');
        });

        it("Testing with valid params", function() {
            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi"], "Audi")).to.equal(`There is 1 car of model Audi in the catalog!`);
            expect(rentCar.searchCar(["Audi","Volkswagen", "BMW", "Audi"], "Audi")).to.equal(`There is 2 car of model Audi in the catalog!`);

        });

     });
  
     describe("Testing calculatePriceOfCar functionality", function() {

        it("Testing with invalid params", function() {
            expect(() => rentCar.calculatePriceOfCar("Volkswagen", '10')).to.throw("Invalid input");
            expect(() => rentCar.calculatePriceOfCar(10, "Volkswagen")).to.throw("Invalid input");
            expect(() => rentCar.calculatePriceOfCar('Lada', 2)).to.throw('No such model in the catalog!');
        });

        it("Testing with valid params", function() {
            expect(rentCar.calculatePriceOfCar('Audi', 1)).to.equal(`You choose Audi and it will cost $36!`)
            expect(rentCar.calculatePriceOfCar('Toyota', 3)).to.equal(`You choose Toyota and it will cost $120!`)
            expect(rentCar.calculatePriceOfCar('Volkswagen', 2)).to.equal(`You choose Volkswagen and it will cost $40!`)
            expect(rentCar.calculatePriceOfCar('BMW', 5)).to.equal(`You choose BMW and it will cost $225!`)
            expect(rentCar.calculatePriceOfCar('Mercedes', 4)).to.equal(`You choose Mercedes and it will cost $200!`)

        });

     });

     describe("Testing checkBudget functionality", function() {

        it("Testing with invalid params", function() {
            expect(() => rentCar.checkBudget("Volkswagen", 10,15)).to.throw("Invalid input");
            expect(() => rentCar.checkBudget(10, "Volkswagen", 15)).to.throw("Invalid input");
            expect(() => rentCar.checkBudget('Lada', 2,15)).to.throw('Invalid input');

        });

        it("Testing with valid params", function() {
            expect(rentCar.checkBudget(10,10,300)).to.equal(`You rent a car!`)
            expect(rentCar.checkBudget(10,50,200)).to.equal('You need a bigger budget!')

        });

     });
});


