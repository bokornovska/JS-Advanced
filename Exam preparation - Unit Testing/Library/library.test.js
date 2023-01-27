const { expect } = require("chai"); 
const { library } = require("./library");

describe("Library", function() {

    describe("calcPriceOfBook", function() {
        it("testing with invalid params", function() {
            expect(() => library.calcPriceOfBook(15,1599)).to.throw("Invalid input")
            expect(() => library.calcPriceOfBook(false,1555)).to.throw("Invalid input")
            expect(() => library.calcPriceOfBook("Pod Igoto",15.95)).to.throw("Invalid input")
        
        });
        it("testing with valid params", function() {
            expect(library.calcPriceOfBook("Book",2000)).to.equal(`Price of Book is 20.00`);
            expect(library.calcPriceOfBook("Book",1980)).to.equal(`Price of Book is 10.00`);
            expect(library.calcPriceOfBook("Book",1960)).to.equal(`Price of Book is 10.00`);        
        });
     });
     
     describe("findBook", function() {
        it("testing with valid params", function() {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], "Troy")).to.equal("We found the book you want.");
            expect(() => library.findBook([], "Troy")).to.throw("No books currently available");
            expect(library.findBook(["Troy", "Life Style", "Torronto"], "Cindarella")).to.equal("The book you are looking for is not here!");


        });
     });

     describe("arrangeTheBooks", function() {
        it("testing with invalid params", function() {
            expect(() => library.arrangeTheBooks('15')).to.throw("Invalid input")
            expect(() => library.arrangeTheBooks(-15)).to.throw("Invalid input")
            expect(() => library.arrangeTheBooks(15.5)).to.throw("Invalid input")
            expect(() => library.arrangeTheBooks(false)).to.throw("Invalid input")

        });
        it("testing with valid params", function () {
            expect(library.arrangeTheBooks(8)).to.equal("Great job, the books are arranged.");
            expect(library.arrangeTheBooks(40)).to.equal("Great job, the books are arranged.");
            expect(library.arrangeTheBooks(41)).to.equal("Insufficient space, more shelves need to be purchased.");
            
        })
     });
});




// •	arrangeTheBooks (countBooks) - A function accept a number:
// o	You need to validate the input, if the countBooks is not an integer number, or is a negative number, throw an error: "Invalid input"

// o	The library has 5 shelves, each shelf can hold 8 books. Distribute the books on the shelves
// o	If all the books are arranged on the shelves, return: "Great job, the books are arranged."
// o	Otherwise, if no space has been reached, return: "Insufficient space, more shelves need to be purchased."

