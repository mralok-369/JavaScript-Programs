// solution of excercise 4 in tut32
console.log("Solution of Excercise 4");

class Library {
    constructor(bookList) {
        this.bookList = bookList;
        this.issuedBooks = {};
    }

    getBookList() {
        this.bookList.forEach(element => {
            console.log(element);
        });
    }

    issueBook(bookname, user) {
        // console.log(this.issuedBooks[bookname]);
        if (this.issuedBooks[bookname]==undefined){
            this.issuedBooks[bookname] = user;
        }
        else{
            console.log("This book is already issued");
        }
    }

    returnBook(bookname) {
        delete this.issuedBooks[bookname];
    }
}