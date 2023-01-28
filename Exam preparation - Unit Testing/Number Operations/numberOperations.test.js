const { expect } = require("chai"); 
const { numberOperations } = require("./numberOperations");

describe("Testing numberOperations", function() {
    describe("powNumber", function() {
        it("testing functionality", function() {
            expect(numberOperations.powNumber(1)).to.equal(1);
            expect(numberOperations.powNumber(2)).to.equal(4);
            expect(numberOperations.powNumber(-2)).to.equal(4);
            expect(numberOperations.powNumber(3)).to.equal(9);
        });
     });

     describe("numberChecker", function() {
        it("testing with invalid params", function() {
            expect(() => numberOperations.numberChecker("Sedan")).to.throw(Error);
            expect(() => numberOperations.numberChecker(undefined)).to.throw(Error);
            expect(() => numberOperations.numberChecker([15,12])).to.throw(Error);
        });
        it("testing with valid params", function() {
            expect(numberOperations.numberChecker(99)).to.equal("The number is lower than 100!");
            expect(numberOperations.numberChecker(-15)).to.equal("The number is lower than 100!");
            expect(numberOperations.numberChecker('15')).to.equal("The number is lower than 100!");
            expect(numberOperations.numberChecker(150)).to.equal("The number is greater or equal to 100!");
            expect(numberOperations.numberChecker(100)).to.equal("The number is greater or equal to 100!");
            expect(numberOperations.numberChecker('100')).to.equal("The number is greater or equal to 100!");
        });
     });

     describe("sumArrays", function() {
        it("testing functionality", function() {
            expect(numberOperations.sumArrays([1,2,3],[1,2,3])).to.deep.equal([2, 4, 6]);
            expect(numberOperations.sumArrays([1],[1])).to.deep.equal([2]);
            expect(numberOperations.sumArrays([1,2],[1,2])).to.deep.equal([2, 4]);
            expect(numberOperations.sumArrays([1,2],[1])).to.deep.equal([2,2]);


        });
     });
});


// •	sumArrays(array1, array2) - A function that should accepts two parameters (arrays):
// o	the function loops through the arrays and sums the number on the first index in the first array with the 
// number on the first index of the second array, then sums the number on the second index of the two arrays and so on.
// o	The function returns new array, which represents the sum of the two arrays by indexes
