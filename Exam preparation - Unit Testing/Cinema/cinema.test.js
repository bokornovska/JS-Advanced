const { expect } = require("chai"); 
const { cinema } = require("./cinema");

describe("Testing cinema functionality", function() {

    describe("Testing showMovies functionality", function() {
        it("testing with empty array", function() {
            expect(cinema.showMovies([])).to.equal("There are currently no movies to show.");
        });
        it("testing with array", function() {
            expect(cinema.showMovies(['King Kong', 'The Tomorrow War', 'Joker'])).to.equal('King Kong, The Tomorrow War, Joker');
        });
     });

      describe("Testing ticketPrice functionality", function() {
        it("testing shedule", function() {
            expect(cinema.ticketPrice('Premiere')).to.equal(12.00);
            expect(cinema.ticketPrice('Normal')).to.equal(7.50);
            expect(cinema.ticketPrice('Discount')).to.equal(5.50);
        });
        it("testing invalid input", () => {
            expect(() => cinema.ticketPrice("Sedan")).to.throw("Invalid projection type.");
        })
     });

     describe("Testing swapSeatsInHall functionality", function() {
        it("Unsuccessful change of seats in the hall.", function() {
            expect(cinema.swapSeatsInHall(-1,15)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(1,-15)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(1,35)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(21,15)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall('30',15)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(10,'15')).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(false,'15')).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(10,["Somenthing"])).to.equal("Unsuccessful change of seats in the hall.");


            expect(cinema.swapSeatsInHall(0,15)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(10,0)).to.equal("Unsuccessful change of seats in the hall.");

        });
        it("Successful change of seats in the hall.", function() {
            expect(cinema.swapSeatsInHall(1,15)).to.equal("Successful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(20,1)).to.equal("Successful change of seats in the hall.");

           

        });
     });
});
