const findUniqNumber = require('./findUniqNumber.js');

describe('Example tests for findUniqNumber', () => {
  test('Tests', () => {
    expect(findUniqNumber([ 1, 0, 0 ])).toEqual(1);
    expect(findUniqNumber([ 0, 1, 0 ])).toEqual(1);
    expect(findUniqNumber([ 1, 1, 1, 2, 1, 1 ])).toEqual(2);
    expect(findUniqNumber([ 1, 1, 2, 1, 1 ])).toEqual(2);
    expect(findUniqNumber([ 3, 10, 3, 3, 3 ])).toEqual(10);
  });
});