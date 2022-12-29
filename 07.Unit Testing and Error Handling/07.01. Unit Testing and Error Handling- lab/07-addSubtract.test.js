const {createCalculator} = require('./07-addSubtract');
const {expect} = require('chai')

// 1. Return a module (object), containing the functions add(), subtract() and get() as properties
// •	Keep an internal sum that can’t be modified from the outside
// •	The functions add() and subtract() take a parameter that can be parsed as a number 
// (either a number or a string containing a number) that is added or subtracted from the internal sum
// •	The function get() returns the value of the internal sum

describe('createCalculator', () => {

    it('Test 1: should return object', () => {
        expect(typeof createCalculator()).to.equal("object");
    });

    it(`Test 2: return object, that has property add`, () => {
        expect(typeof createCalculator().add).to.equal("function");
    });

    it(`Test 3: return object, that has property subtract`, () => {
        expect(typeof createCalculator().subtract).to.equal("function");
    });

    it(`Test 4: return object, that has property get`, () => {
        expect(typeof createCalculator().get).to.equal("function");
    });

    it(`Test 5: internal sum can't be modified`, () => {
        expect(createCalculator().value).to.equal(undefined);
    });

    it(`Test 6: add method adds parsable input`, () => {
        const calc = createCalculator();
        calc.add("1");
        expect(calc.get()).to.equal(1);
    });

    it(`Test 7: subtract method subtracts parsable input`, () => {
        const calc = createCalculator();
        calc.add("2");
        calc.subtract("1");
        expect(calc.get()).to.equal(1);
    });

});