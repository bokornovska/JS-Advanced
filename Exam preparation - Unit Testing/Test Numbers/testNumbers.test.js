const { expect } = require("chai"); 
const { testNumbers } = require("./testNumbers");

describe("Testing testNumbers functionality", function() {
    describe("sumNumber", function() {
        it("check if parameters are numbers", function() {
            expect(testNumbers.sumNumbers('1',5)).to.be.undefined;
            expect(testNumbers.sumNumbers(1,'5')).to.be.undefined;
            expect(testNumbers.sumNumbers(false,'5')).to.be.undefined;
            expect(testNumbers.sumNumbers(false,[5])).to.be.undefined;
        });
        it("check with numbers", function() {
            expect(testNumbers.sumNumbers(1,5)).to.equal("6.00");
            expect(testNumbers.sumNumbers(-1,5)).to.equal("4.00");
            expect(testNumbers.sumNumbers(1,-5)).to.equal('-4.00');
            expect(testNumbers.sumNumbers(1,5.5)).to.equal('6.50');
            expect(testNumbers.sumNumbers(1,5.512)).to.equal('6.51');
        });

     });
     
     describe("numberChecker", function() {
        it("testing with invalid params", function() {

            expect(() => testNumbers.numberChecker(undefined)).to.throw("The input is not a number!");
            expect(() => testNumbers.numberChecker('aaa')).to.throw("The input is not a number!");
        });
        it("testing with valid params", function() {
            expect(testNumbers.numberChecker(1)).to.equal("The number is odd!");
            expect(testNumbers.numberChecker('1')).to.equal("The number is odd!");
            expect(testNumbers.numberChecker('2')).to.equal("The number is even!");
            expect(testNumbers.numberChecker(2)).to.equal("The number is even!");
            expect(testNumbers.numberChecker(0)).to.equal("The number is even!");
        });

     });

     describe("averageSumArray", function() {
        it("testing with array", function() {
            // expect(testNumbers.averageSumArray([])).to.deep.equal(NaN);
            expect(testNumbers.averageSumArray([10])).to.equal(10);
            expect(testNumbers.averageSumArray([10, 20])).to.equal(15);
            expect(testNumbers.averageSumArray([10, 20, 30])).to.equal(20);
          
        });
     });
});


