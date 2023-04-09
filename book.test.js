const {ReadingArray, Book} = require('./book')
test("ReadingArray", () => {
    //SetUp
    const arr = new ReadingArray();
    //Execute
    const result = arr.numRead();
    //Assert
    expect(result).toBe(0)
} )
test ("addBook", () => {
    //SetUP
    const arr = new ReadingArray();
    const book = new Book("Martian","Davidoff",362,2004);
    arr.addBook(book, "sep 1", 5);
    //Execute
    const result = arr.numRead();
    //assert
    expect(result).toBe(1);
    
})   

