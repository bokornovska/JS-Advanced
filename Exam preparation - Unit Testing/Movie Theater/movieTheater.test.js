const { expect } = require("chai");
const { assert } = require("chai");

const { movieTheater } = require("./movieTheater");

describe("Testing movieTheatre functionality", function () {
    describe("Testing ageRestrictions functionality", function () {

        it("Testing with valid params", function () {
            expect(movieTheater.ageRestrictions("G")).to.equal(`All ages admitted to watch the movie`);
            expect(movieTheater.ageRestrictions("PG")).to.equal(`Parental guidance suggested! Some material may not be suitable for pre-teenagers`)
            expect(movieTheater.ageRestrictions("R")).to.equal(`Restricted! Under 17 requires accompanying parent or adult guardian`)
            expect(movieTheater.ageRestrictions("NC-17")).to.equal(`No one under 17 admitted to watch the movie`)
            expect(movieTheater.ageRestrictions("")).to.equal(`There are no age restrictions for this movie`)
            expect(movieTheater.ageRestrictions("Something else")).to.equal(`There are no age restrictions for this movie`)
        });
    });

    describe("Testing moneySpent functionality", function () {

        it("Testing with invalid params", function () {
            expect(() => movieTheater.moneySpent("string", ["Nachos", "Popcorn"], ["Soda", "Water"])).to.throw("Invalid input");
            expect(() => movieTheater.moneySpent(15, ["Nachos", "Popcorn"], 15)).to.throw("Invalid input");
            expect(() => movieTheater.moneySpent(2, ["Nachos", "Popcorn"], "Soda")).to.throw("Invalid input");
            expect(() => movieTheater.moneySpent("string", false, ["Soda", "Water"])).to.throw("Invalid input");
        });
        it("Testing with valid params", function () {
            expect(movieTheater.moneySpent(2, ["Nachos", "Popcorn"], ["Soda", "Water"])).to.equal(`The total cost for the purchase is 44.50`);
            expect(movieTheater.moneySpent(10, ["Nachos", "Popcorn"], ["Soda", "Water"])).to.equal(`The total cost for the purchase with applied discount is 131.60`);
            
        });
    });

    describe("Testing reservation functionality", function () {

        it("Testing with invalid params", function () {
            expect(() => movieTheater.reservation(["Nachos", "Popcorn"], ["Soda", "Water"])).to.throw("Invalid input");
            expect(() => movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }], false)).to.throw("Invalid input");
            expect(() => movieTheater.reservation(2, ["Nachos", "Popcorn"])).to.throw("Invalid input");

        });

        it("Testing with valid params", function () {
           expect(() => movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 },{ rowNumber: 2, freeSeats: 5 }], 7),1);
           expect(() => movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 },{ rowNumber: 2, freeSeats: 8 }], 8),2);
           assert.equal(movieTheater.reservation([{ rowNumber: 1, freeSeats: 2 },{ rowNumber: 2, freeSeats: 2 }], 1),2);
            
        });
    });

});


// reservation (rowsArray, neededSeatsCount) - A function that accepts array and number.
// o	The rowsArray array will store the rows and the free seats for them ([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }...])
// o	The neededSeatsCount will be a number higher than 0, representing the count of the needed seats for
//  the reservation.
// o	You must iterate through both the rowsArray  and extract the numbers of the rows that have enough free spaces

// o	Finally, return the row with the largest number.

// o	There is a need for validation for the input, may not always be valid. In case of submitted invalid parameters
// , throw an error "Invalid input":
// 	If passed rowsArray or neededSeatsCount parameters are not an array and number.



