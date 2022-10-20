const findUniqArray = require('./findUniqArray.js');

describe('Example tests for findUniqArray', () => {
  test('Tests', () => {
    expect(findUniqArray([1, 1, 2, 2, 4, 2, 3, 7, 3])).toEqual([1, 2, 4, 3, 7]);
    expect(findUniqArray([1, 2, 3, 2, 2, 3, 3, 1])).toEqual([1, 2, 3]);
  });
});