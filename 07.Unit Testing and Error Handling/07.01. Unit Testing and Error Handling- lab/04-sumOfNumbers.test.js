const {sum} = require('./04-sumOfNumbers');
const { expect } = require('chai');

// •	Take an array of numbers as an argument
// •	Return the sum of the values of all elements inside the array

describe('sum', () => {

    it('should return the sum of the values of all elements', () => {

        let input = [1,2,3]

        let result = sum(input);

        expect(result).to.equal(6);
    });

    it('should work with array of strings', () => {
        let input = ['1','2'];

        let result = sum(input);

        expect(result).to.equal(3)
    })
});