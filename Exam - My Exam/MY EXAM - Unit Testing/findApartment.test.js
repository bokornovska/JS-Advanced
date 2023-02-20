const { expect } = require("chai"); 
const  findNewApartment  = require("./findApartment");

describe("Testing findNewApartment functionality", function() {
    describe("Testing isGoodLocation functionality", function() {

        it("Testing with invalid params", function() {
            expect(() => findNewApartment.isGoodLocation(15, 1988).to.throw("Invalid input"));
            expect(() => findNewApartment.isGoodLocation("Varna", 1988).to.throw("Invalid input"));
            expect(() => findNewApartment.isGoodLocation(false, false).to.throw("Invalid input"));
            expect(() => findNewApartment.isGoodLocation(["Varna"], true).to.throw("Invalid input"));
            expect(() => findNewApartment.isGoodLocation("Varna", "true").to.throw("Invalid input"));
            expect(() => findNewApartment.isGoodLocation("Varna", ["false"]).to.throw("Invalid input"));
        });

        it("testing with valid params wrong city", function () {
            expect(findNewApartment.isGoodLocation('Pleven', true)).to.equal("This location is not suitable for you.");
            expect(findNewApartment.isGoodLocation('Ruse', false)).to.equal("This location is not suitable for you.");
        });

        it("testing with valid params (false)", function () {
            expect(findNewApartment.isGoodLocation('Varna', false)).to.equal("There is no public transport in area.");
            expect(findNewApartment.isGoodLocation('Sofia', false)).to.equal("There is no public transport in area.");
            expect(findNewApartment.isGoodLocation('Plovdiv', false)).to.equal("There is no public transport in area.");
        });

        it("testing with valid params (true)", function () {
            expect(findNewApartment.isGoodLocation('Varna', true)).to.equal("You can go on home tour!");
            expect(findNewApartment.isGoodLocation('Sofia', true)).to.equal("You can go on home tour!");
            expect(findNewApartment.isGoodLocation('Plovdiv', true)).to.equal("You can go on home tour!");
        });

     });



     describe("Testing isLargeEnough functionality", function() {

        it("Testing with invalid params", function() {
            expect(() => findNewApartment.isLargeEnough([40, 50, 60], "55").to.throw("Invalid input"));
            expect(() => findNewApartment.isLargeEnough([40, 50, 60], false).to.throw("Invalid input"));
            expect(() => findNewApartment.isLargeEnough([40, 50, 60], [60]).to.throw("Invalid input"));
            expect(() => findNewApartment.isLargeEnough([], 55).to.throw("Invalid input"));
            expect(() => findNewApartment.isLargeEnough(40, 55).to.throw("Invalid input"));
            expect(() => findNewApartment.isLargeEnough("40", 30).to.throw("Invalid input"));
            expect(() => findNewApartment.isLargeEnough(false, 30).to.throw("Invalid input"));
           
        });

        it("testing with valid params", function () {
            expect(findNewApartment.isLargeEnough([40, 50, 60], 40)).to.equal(`40, 50, 60`);
            expect(findNewApartment.isLargeEnough([40, 50, 60], 50)).to.equal(`50, 60`);
            expect(findNewApartment.isLargeEnough([40, 50, 60], 60)).to.equal(`60`);
            expect(findNewApartment.isLargeEnough([40, 50, 60], 30)).to.equal(`40, 50, 60`);
            expect(findNewApartment.isLargeEnough([40, 50, 60], 70)).to.equal(``);
            expect(findNewApartment.isLargeEnough([40], 35)).to.equal(`40`);           
        });

     });


     describe("Testing isItAffordable functionality", function() {

        it("Testing with invalid params", function() {
            expect(() => findNewApartment.isItAffordable(400, "55").to.throw("Invalid input"));
            expect(() => findNewApartment.isItAffordable(400, false).to.throw("Invalid input"));
            expect(() => findNewApartment.isItAffordable(40, [60]).to.throw("Invalid input"));
            expect(() => findNewApartment.isItAffordable([40], 55).to.throw("Invalid input"));
            expect(() => findNewApartment.isItAffordable("40", 55).to.throw("Invalid input"));
            expect(() => findNewApartment.isItAffordable(false, 30).to.throw("Invalid input"));

            expect(() => findNewApartment.isItAffordable(0, 30).to.throw("Invalid input"));
            expect(() => findNewApartment.isItAffordable(300, 0).to.throw("Invalid input"));
            expect(() => findNewApartment.isItAffordable(-300, 200).to.throw("Invalid input"));
            expect(() => findNewApartment.isItAffordable(300, -150).to.throw("Invalid input"));
           
        });

        it("testing with valid params ", function () {
            expect(findNewApartment.isItAffordable(300, 400)).to.equal("You can afford this home!");
            expect(findNewApartment.isItAffordable(300, 300)).to.equal("You can afford this home!");
            expect(findNewApartment.isItAffordable(5000, 5001)).to.equal("You can afford this home!");

            expect(findNewApartment.isItAffordable(400, 300)).to.equal("You don't have enough money for this house!");
            expect(findNewApartment.isItAffordable(400, 399)).to.equal("You don't have enough money for this house!");
        
        });

     });
});

