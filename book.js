class Book {
    constructor(name, auth, leng, ye){
        this.title = name;
        this.author = auth;
        this.length = leng;
        this.year = ye;
    }
    getTitle(){
        return this.title;
    }
    setDate(date){
        this.dateRead = date;
    }
    setRating(ratingInput){
        this.rating = ratingInput;
    }

}
class ReadingArray {
constructor(){
    this.books = [];
}
    
numRead(){
    return this.books.length;
}
addBook(book, dateRead, rating){
    this.books.push(book);
    book.setDate(dateRead);
    book.setRating(rating) 
}
removeBook(title){
    for(let i = 0; i < this.books.length; i++){
        if(this.books[i].getTitle() === title){
            this.books.splice(i, 1);
            break;
        }
    }
}

}
module.exports = {ReadingArray, Book}