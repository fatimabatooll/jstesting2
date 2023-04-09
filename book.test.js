const {ReadingArray} = require('./book')
test("ReadingArray", () => {
    //SetUp
    const arr = new ReadingArray();
    //Execute
    const result = arr.numRead();
    //Assert
    expect(result).toBe(0)
} )