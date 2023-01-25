const { expect } = require("chai");
const { assert } = require("chai");

const { carService } = require("./03. carService");

describe("Testing carService functionality …", function() {
    describe("Testing isItExpensive functionality", function() {

        it("testing with valid params", function() {
            expect(carService.isItExpensive("Engine")).to.equal(`The issue with the car is more severe and it will cost more money`);
            expect(carService.isItExpensive("Transmission")).to.equal(`The issue with the car is more severe and it will cost more money`);
            expect(carService.isItExpensive("Tier")).to.equal( `The overall price will be a bit cheaper`);
            expect(carService.isItExpensive("Horn")).to.equal( `The overall price will be a bit cheaper`);
        
        });
     });

     describe("Testing discount functionality", function() {

        it("testing with invalid params", function() {
            expect(() => carService.discount(15, '10')).to.throw("Invalid input");
            expect(() => carService.discount('15', 10)).to.throw("Invalid input");
            expect(() => carService.discount(false, 10)).to.throw("Invalid input");
        });

        it("testing with valid params", function() {
            expect(carService.discount(2,150)).to.equal( "You cannot apply a discount");
            expect(carService.discount(1,150)).to.equal( "You cannot apply a discount");
            expect(carService.discount(3,150)).to.equal(`Discount applied! You saved 22.5$`);
            expect(carService.discount(7,150)).to.equal(`Discount applied! You saved 22.5$`);
            expect(carService.discount(8,150)).to.equal(`Discount applied! You saved 45$`);
        });
     });

     describe("Testing partsToBuy functionality", function() {

        it("testing with invalid params", function() {
            expect(() => carService.partsToBuy([15], '10')).to.throw("Invalid input");
            expect(() => carService.partsToBuy('15',[10])).to.throw("Invalid input");
            expect(() => carService.partsToBuy(false, 10)).to.throw("Invalid input");
        });

        it("testing with valid params", function() {
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }],["blowoff valve", "injectors"])).to.equal( 145);
            expect(carService.partsToBuy([],["blowoff valve", "injectors"])).to.equal(0);

        });
     });


});



// partsToBuy (partsCatalog, neededParts) - A function that accepts two arrays.
// o	The partsCatalog array will store the parts and the price for them ([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 } ...])
// o	The neededParts array will store the parts that you need to buy (["blowoff valve", "injectors" ...])
// o	You must iterate through both the arrays and calculate the total price of the parts that are equal to the neededParts.
// o	If partsCatalog is empty, return 0
// o	Finally, return the total price of all parts needed.

// o	There is a need for validation for the input, may not always be valid. 
// In case of submitted invalid parameters, throw an error "Invalid input":
// 	If passed partsCatalog or neededParts parameters are not an arrays.
