import chunk from './chunk';

describe('chunk', () => {
  const array = [1, 2, 3];

  test.each([0, -1, -2, -Infinity])('if size < 1', (size) => {
    expect(chunk(array, size)).toEqual([]);
  });

  test('if size is positive and size <= length', () => {
    expect(chunk(array, 1)).toEqual([[1], [2], [3]]);
    expect(chunk(array, 2)).toEqual([[1, 2], [3]]);
    expect(chunk(array, 3)).toEqual([[1, 2, 3]]);
  });

  test('if size is larger than the length', () => {
    expect(chunk(array, 4)).toEqual([[1, 2, 3]]);
    expect(chunk(array, 5)).toEqual([[1, 2, 3]]);
  });

  test('if array is empty', () => {
    expect(chunk([], 1)).toEqual([]);
    expect(chunk([], 2)).toEqual([]);
    expect(chunk([], 3)).toEqual([]);
  });

  test('if size is a float', () => {
    expect(chunk(array, 1.2)).toEqual([[1], [2], [3]]);
    expect(chunk(array, 2.4)).toEqual([[1, 2], [3]]);
    expect(chunk(array, 3.6)).toEqual([[1, 2, 3]]);
  });

  test('if size is NaN', () => {
    expect(chunk(array, NaN)).toEqual([]);
  });
});
