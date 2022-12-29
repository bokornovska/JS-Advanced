const { expect } = require('chai');
const { isSymmetric } = require('../05 - checkForSymmetry');

// •	Take an array as an argument
// 1.Return false for any input that isn’t of the correct type
// 2.Return true if the input array is symmetric
// •	Otherwise, return false

// describe('isSymmetric', () => {

//     it('should return false if input is not an array', () => {

//         let input = 'Not array';

//         let result = isSymmetric(input);

//         expect(result).to.be.false;
//     });

//     it('should return true if input is a symetric array', () => {
//         let input = [1,2,3,4,3,2,1];

//         let result = isSymmetric(input);

//         expect(result).to.be.true;
//     });

//     it('should returne falce if the array isa not symetric', () => {
//         let input = [1,2,3,4,3,2];

//         let result = isSymmetric(input);

//         expect(result).to.be.false;
//     })
// })

describe("Symmetry Checker", () => {                            // describe() Като първи параметър подаваме името на цялостния тест
    // Като втори параметър е функцията
    it("Test 1: works with symmetric numeric array", () => {            // it() Като първи параметър подаваме името на самият тест, като втори е функцията 
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;           // Очакваме резултата от функцията isSymmetric с подаден параметър да върне true 
    });

    it("Test 2: return false for non-symmetric array", () => {
        expect(isSymmetric([1, 2, 3])).to.be.false;
    });

    it("Test 3: return false for non array", () => {
        expect(isSymmetric(5)).to.be.false;
    });

    it("Test 4: works with symmetric odd-length array", () => {
        expect(isSymmetric([1, 2, 1])).to.be.true;
    });

    it("Test 5: works with symmetric string array", () => {
        expect(isSymmetric(["a", "b", "b", "a"])).to.be.true;
    });

    it("Test 6: return false for string param", () => {
        expect(isSymmetric("abba")).to.be.false;
    });

    it("Test 7: return false for type mismatched elements", () => {
        expect(isSymmetric([1, 2, "1"])).to.be.false;
    });
});
