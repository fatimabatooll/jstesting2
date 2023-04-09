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
test('removeBook', () => {
    //SetUp
    const arr = new ReadingArray();
    const arr2 = new ReadingArray();
    const book = new Book("Martian","Davidoff",362,2004);
    const book2 = new Book("how to resist", "Good me", 308, 2001 );
    arr.addBook(book, "sep 1", 4);
    arr.removeBook("Martian");
    arr2.addBook(book2, "Sep 5", 4);
    // Execute
    const result = arr.toEqual(arr2.getBook());
})
