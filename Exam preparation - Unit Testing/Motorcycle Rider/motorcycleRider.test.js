const { expect } = require("chai"); 
const { motorcycleRider } = require("./motorcycleRider");

describe("Testing motoRider functionality", function() {

    describe("Testing licenseRestriction functionality", function() {
        it("If the caregory is AM", function() {
            expect(motorcycleRider.licenseRestriction("AM")).to.equal("Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.")
        });
        it("If the caregory is A2", function() {
            expect(motorcycleRider.licenseRestriction("A2")).to.equal("Motorcycles with maximum power of 35KW. and the minimum age is 18.")
        });
        it("If the caregory is A", function() {
            expect(motorcycleRider.licenseRestriction("A")).to.equal("No motorcycle restrictions, and the minimum age is 24.")
        });
        it("If the caregory is anything else", function() {
            expect(() => motorcycleRider.licenseRestriction("B1")).to.throw(Error)
        });
        it("If the caregory is not string", function() {
            expect(() => motorcycleRider.licenseRestriction(15)).to.throw(Error)
        });

     });

     describe("Testing motorcycleShowroom functionality", function() {
        
        it("If the first param is not array", function() {
            expect(() => motorcycleRider.motorcycleShowroom("string", 60)).to.throw(Error)
        });
        it("If the second param is not number", function() {
            expect(() => motorcycleRider.motorcycleShowroom([15,16], "15")).to.throw(Error)
        });
        it("If the second param is not number 2", function() {
            expect(() => motorcycleRider.motorcycleShowroom([15,16], false)).to.throw(Error)
        });
        it("If both params are incorrect", function() {
            expect(() => motorcycleRider.motorcycleShowroom("somenthing", "else")).to.throw(Error)
        });
        it("If the array is empty", function() {
            expect(() => motorcycleRider.motorcycleShowroom([], 60)).to.throw(Error)
        });
        it("If the number is less than 50", function() {
            expect(() => motorcycleRider.motorcycleShowroom([65,75], 49)).to.throw(Error)
        });
        it("If the input is correct", function() {
            expect(motorcycleRider.motorcycleShowroom([100,200,300,450], 600)).to.equal("There are 4 available motorcycles matching your criteria!")
            expect(motorcycleRider.motorcycleShowroom([100,200,300,450,650], 600)).to.equal("There are 4 available motorcycles matching your criteria!")
            expect(motorcycleRider.motorcycleShowroom([100,200,300,450,-1000,"300"], 600)).to.equal("There are 5 available motorcycles matching your criteria!")
            expect(motorcycleRider.motorcycleShowroom([100,200,300,450], 350)).to.equal("There are 3 available motorcycles matching your criteria!")
            expect(motorcycleRider.motorcycleShowroom([200,300,450], 100)).to.equal("There are 0 available motorcycles matching your criteria!")
        });

     });

     describe("Testing otherSpendings functionality", function() {
        
        it("If the input is not correct", function() {
            expect(() => motorcycleRider.otherSpendings(["sad","ase"],["sad","ase"],60)).to.throw(Error)
            expect(() => motorcycleRider.otherSpendings("sad",["sad","ase"],false)).to.throw(Error)
            expect(() => motorcycleRider.otherSpendings(["sad","ase"],15,true)).to.throw(Error)
        });
        it("If the input is correct", function() {
            expect(motorcycleRider.otherSpendings(["helmet", "jacked"],["engine oil", "oil filter"], false)).to.equal("You spend $600.00 for equipment and consumables!")
            expect(motorcycleRider.otherSpendings(["helmet"],["engine oil"], false)).to.equal("You spend $270.00 for equipment and consumables!")
            expect(motorcycleRider.otherSpendings(["helmet"],["engine oil"], true)).to.equal("You spend $243.00 for equipment and consumables with 10% discount!")
            
        });
      

     });
   
});




 




