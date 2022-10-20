const combineObjects = require('./combineObjects.js');

const objA = { 'a': 10, 'b': 20, 'c': 30 };
const objB = { 'a': 3, 'c': 6, 'd': 3 };
const objC = { a: 5, d: 11, e: 8 };
const objD = { c: 3 };

describe('Combine two objects', () => {
  test('Should return { a: 13, b: 20, c: 36, d: 3 }', () => {
    expect(combineObjects(objA, objB)).toEqual({ 'a': 13, 'b': 20, 'c': 36, 'd': 3 })
  });
});

describe('Combine three objects', () => {
  test('Test', () => {
    expect(combineObjects(objA, objB, objC)).toEqual({ a: 18, b: 20, c: 36, d: 14, e: 8 })
    expect(combineObjects(objA, objC, objD)).toEqual({ a: 15, b: 20, c: 33, d: 11, e: 8 })
  });
})

describe('Handle empty objects', () => {
  test('Test', () => {
    expect(combineObjects({}, {}, {})).toEqual({})
    expect(combineObjects(objA, objC, {})).toEqual({ a: 15, b: 20, c: 30, d: 11, e: 8 })
  })
})