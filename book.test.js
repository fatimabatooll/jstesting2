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
    // Set up
    const arr = new ReadingArray();
    const book = new Book("Martian","Davidoff",362,2004);
    const book2 = new Book("how to resist", "Good me", 308, 2001 );
    arr.addBook(book, "sep 1", 4);
    arr.addBook(book2, "sep 2", 5);

    // Execute
    arr.removeBook("Martian");

    // Assert
    expect(arr.numRead()).toBe(1);
});

