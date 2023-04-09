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


}
module.exports = {ReadingArray, Book}