const {isOddOrEven} = require('./02-evenOrOdd');
const { expect } = require('chai');

// Write one or two tests passing parameters that are NOT of type string to the function and expecting it to return undefined.
// After we have checked the validation it's time to check whether the function works correctly with valid arguments. 
// Write a test for each of the cases:
// -	One where we pass a string with even length;
// -	And one where we pass a string with an odd length;
// Finally, make an extra test passing multiple different strings in a row to ensure the function works correctly.

describe("Tests", () => {                            
    it("Test 1: params that are not string - with number", () => {           
        expect(isOddOrEven(15)).to.be.undefined;          
    });
    it("Test 2: params that are not string - with boolean", () => {           
        expect(isOddOrEven(false)).to.be.undefined;          
    });
    it("Test 3: string with even length", () => {           
        expect(isOddOrEven("dada")).to.equal('even');          
    });
    it("Test 4: string with odd length", () => {           
        expect(isOddOrEven("dadad")).to.equal('odd');          
    });
});