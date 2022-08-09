const mergeSort = require('./mergeSort.js')

test("First test", () => {
    expect(mergeSort('hello')).toEqual('hello')
})