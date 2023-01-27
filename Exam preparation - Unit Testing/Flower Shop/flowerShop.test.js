const { expect } = require("chai"); 
const { flowerShop } = require("./flowerShop");

describe("Testing flowerShop functionality", function() {
    describe("Testing calcPriceOfFlowers functionality", function() {

        it("testing with invalid input", function() {
            expect(() => flowerShop.calcPriceOfFlowers("Sedan","sdf",1899)).to.throw(Error);
            expect(() => flowerShop.calcPriceOfFlowers(false,5,1899)).to.throw(Error);
            expect(() => flowerShop.calcPriceOfFlowers("Sedan",15,'18')).to.throw(Error);
        });
        it("testing with valid input", function() {
            expect(flowerShop.calcPriceOfFlowers('string', 3, 3)).to.equal(`You need $9.00 to buy string!`);
            expect(flowerShop.calcPriceOfFlowers('string', 4, 3)).to.equal(`You need $12.00 to buy string!`);
            expect(flowerShop.calcPriceOfFlowers('string', 0, 3)).to.equal(`You need $0.00 to buy string!`);

        });
     });

     describe("Testing checkFlowersAvailable functionality", function() {
       
        it("testing with valid input", function() {
            expect(flowerShop.checkFlowersAvailable("Rose",["Rose", "Lily", "Orchid"])).to.equal(`The Rose are available!`)
            expect(flowerShop.checkFlowersAvailable("Temenujka",["Rose", "Lily", "Orchid"])).to.equal(`The Temenujka are sold! You need to purchase more!`)
        });
     });

     describe("Testing sellFlowers functionality", function() {

        it("testing with invalid input", function() {
            expect(() => flowerShop.sellFlowers("Sedan", 9)).to.throw("Invalid input!");
            expect(() => flowerShop.sellFlowers([false,5],'18')).to.throw("Invalid input!");
            expect(() => flowerShop.sellFlowers("Sedan",false)).to.throw("Invalid input!");
        });
        it("testing with valid input", function() {
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],1)).to.equal('Rose / Orchid')
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],0)).to.equal('Lily / Orchid')

           
        });
     });
});




// •	sellFlowers(gardenArr, space) - A function that accepts two parameters (array and number):

// o	The gardenArr array will store the names of flowers(["Rose", "Lily", "Orchid"]);
// o	You must remove an element from the array that is located on the space specified as a parameter;


// o	Finally, return the changed array of flowers as a string, joined by " / ".
