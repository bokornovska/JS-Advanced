const {lookupChar} = require('./03-charLookup');
const { expect } = require('chai');

describe("Tests for lookupChar", () => {



it("Test 1: return undefined with two numbers", () => {           
    expect(lookupChar(15, 15)).to.be.undefined;          
});
it("Test 2: return undefined with two strings", () => {           
    expect(lookupChar('Pesho', 'Gosho')).to.be.undefined;          
});
it("Test 3: return undefined with array and boolean", () => {           
    expect(lookupChar([15], false)).to.be.undefined;          
});
it("Test 4: return incorrect index - bigger", () => {           
    expect(lookupChar('string', 15)).to.equal('Incorrect index');          
});
it("Test 5: return incorrect index - smaller", () => {           
    expect(lookupChar('string', -2)).to.equal('Incorrect index');          
});
it("Test 6: return incorrect index with  decimal number - 0.99", () => {           
    expect(lookupChar('string', 0.99)).to.be.undefined;           
});
it("Test 7: return char", () => {           
    expect(lookupChar('string', 1)).to.equal('t');          
});
})