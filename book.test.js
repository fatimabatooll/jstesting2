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
test('addionalbook', () => {
    //setup
    const arr =new ReadingArray();
    const book = new Book('Martian', "Davidoff", 362, 2004);
    const book2 = new Book("Atomic Habbts", "hello", 365, 2021 );
    arr.addBook(book, "Sep 1", 5);
    arr.addBook(book2, "Sep 5", 7);
    //Execute
    const result = arr.numRead();
    //aseert
    expect(result).toBe(2);
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

test("getBook", () => {
    // setup 
    const arr = new ReadingArray();
    const arr2 = new ReadingArray();
    const book = new Book ("power", "noor", 40, 2003 )
    arr.addBook(book, "sep 4", 4);
    arr2.addBook(book, "sep 4", 4);

    //Execute
    const result = arr.getBook();
    //assert
    expect(arr2.getBook()).toEqual(result)

})
test("getBooksByRating", () => {
    const arr =new ReadingArray();
    const arr2 = new ReadingArray();
    const book = new Book("atomic1", "nisha", 50, 2020);
    const book2 = new Book("atomic2", "sara", 70, 2019);
    const book3 = new Book ("atomic3", "zara", 77, 2022 );
    arr.addBook(book, "Sep 1", 1);
    arr.addBook(book2, "Sep 3", 3);
    arr.addBook(book3, "Sep 4", 4);
    arr2.addBook(book2, "Sep 6", 7);
    arr2.addBook(book3, "Sep 5", 5);
    // execute
    const result = arr.getBookByRating(5);
    // assert
    expect(result).toEqual(arr2.getBook());
})