class LibraryCollection {

    constructor(capacity) {

        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {

        if (this.books.length === this.capacity) {
            throw new Error("Not enough space in the collection.");
        }

        let book = {
            bookName,
            bookAuthor,
            payed: false,
        }

        this.books.push(book);

        return `The ${bookName}, with an author ${bookAuthor}, collect.`

    }

    payBook(bookName) {

        let book = this.books.find((b) => b.bookName === bookName);

        if (book === undefined) {
            throw new Error(`${bookName} is not in the collection.`)
        }

        if (book.payed === true) {
            throw new Error(`${bookName} has already been paid.`)
        }

        book.payed = true;
        return `${bookName} has been successfully paid.`
    }

    removeBook(bookName) {

        let book = this.books.find((b) => b.bookName === bookName);

        if (book === undefined) {
            throw new Error("The book, you're looking for, is not found.")
        }

        if (book.payed === false) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`)
        }

        let bookIndex = this.books.indexOf(book);
        this.books.splice(bookIndex, 1);

        return `${bookName} remove from the collection.`
    }


    getStatistics(bookAuthor) {

        let result = [];

        if (!bookAuthor) {

            let emptySlots = this.capacity - this.books.length;
            result.push(`The book collection has ${emptySlots} empty spots left.`)

            this.books
                .sort((a, b) => a.bookName.localeCompare(b.bookName))
                .forEach((b) => {
                    let paidOrNot = "Has Paid";
                    if (b.payed === false) {
                        paidOrNot = "Not Paid";
                    }
                    result.push(`${b.bookName} == ${b.bookAuthor} - ${paidOrNot}.`)
                });

                return result.join('\n')
        }else{

            const foundAuthor = this.books.find((book) => book.bookAuthor === bookAuthor);

            if (foundAuthor === undefined) {
                throw new Error(`${bookAuthor} is not in the collection.`);
            } else {
                let paidOrNot = "Has Paid";
                if (foundAuthor.payed === false) {
                    paidOrNot = "Not Paid";
                }
                return `${foundAuthor.bookName} == ${foundAuthor.bookAuthor} - ${paidOrNot}.`;
            }

        }

    }
}



// library.addBook('Don Quixote', 'Miguel de Cervantes');
// library.payBook('Don Quixote');
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// library.addBook('Ulysses', 'James Joyce');
// console.log(library.getStatistics());



let library = new LibraryCollection(2);

console.log(library.addBook("Don Quixote", "Miguel de Cervantes"))
console.log(library.getStatistics("Miguel de Cervantes"))