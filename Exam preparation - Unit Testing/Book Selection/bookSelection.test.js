const { expect } = require("chai"); // Изисквам от библиотеката chai функцията expect
const { bookSelection } = require("./bookSelection");

describe("Testing bookSelection functionality", () => {

    describe("Testing if the genre is suiteble", () => {

        it("if genre is suiteble with Thriller", () => {
            expect(bookSelection.isGenreSuitable("Thriller", 18)).to.equal(`Those books are suitable`);
        });
        it("if genre is suiteble with Horror", () => {
            expect(bookSelection.isGenreSuitable("Horror", 15)).to.equal(`Those books are suitable`);
        });
        it("if genre is not suiteble with Thriller", () => {
            expect(bookSelection.isGenreSuitable("Thriller", 10)).to.equal(`Books with Thriller genre are not suitable for kids at 10 age`);
        });
        it("if genre is suiteble with Horror", () => {
            expect(bookSelection.isGenreSuitable("Horror", 11)).to.equal(`Books with Horror genre are not suitable for kids at 11 age`);
        });
     });

     describe("Testing if the book is afordable", () => {  // КОГАТО ПРОВЕРЯВАМЕ ЗА ГРЕШКА ТРЯБВА ДА ИМА () => Преди обекта с метода !!!!!!!!!!!

        it("if the first param is not a number", () => {
            expect(() => bookSelection.isItAffordable("Thriller", 18)).to.throw(Error);
        });
        it("if the second param is not a number", () => {
            expect(() => bookSelection.isItAffordable(15, false)).to.throw(Error);
        });
        it("if the budget is not enough", () => {
            expect(bookSelection.isItAffordable(10, 9)).to.equal("You don't have enough money");
        });
        it("if the budget is enough", () => {
            expect(bookSelection.isItAffordable(15, 20)).to.equal(`Book bought. You have 5$ left`);
        });
       
     });

     describe("Testing suitableTitles functionality", () => {

        it("if the first param is not array", () => {
            expect(() => bookSelection.suitableTitles("Thriller", "string")).to.throw(Error);
        });
        it("if the second param is not string", () => {
            expect(() => bookSelection.suitableTitles(["Thriller", "Horror"], 10)).to.throw(Error);
        });
       

        it(`works correct with 1 match`, () => {  // КОГАТО СЕ СРАВНЯВАТ МАСИВИ ТРЯБВА DEEP ДА СЕ СЛОЖИ ПРЕД EQUAL !!!!!!!!!!!!
            let obj1 = { title: "a", genre: "aa" };
            expect(bookSelection.suitableTitles([obj1], "aa")).to.deep.equal(["a"]);
          });
      
          it(`works correct with no match`, () => {
            let obj1 = { title: "a", genre: "aa" };
            expect(bookSelection.suitableTitles([obj1], "aaa")).to.deep.equal([]);
          });
     });
   
});

// •	suitableTitles (books, wantedGenre) - A function that accepts an array and string.
// o	The books array will store the titles and the genre of its books ([{ title: "The Da Vinci Code", genre: "Thriller" }, ...])
// o	You must add the title of the book that its genre is equal to the wantedGenre.
// o	Finally, return the changed array of book titles.
// o	There is a need for validation for the input, an array and string may not always be valid..
//  In case of submitted invalid parameters, throw an error "Invalid input":
// 	If passed books parameter is not an array.
// 	If the wantedGenre is not a string.



