import shuffle from './shuffle';

describe('shuffle', () => {
  test('if the shuffled array has the same length', () => {
    const array = [1, 2, 3, 4, 5];
    const shuffled = shuffle(array);
    expect(shuffled).toHaveLength(array.length);
  });

  test('if the shuffled array contains the same elements', () => {
    const array = [1, 2, 3, 4, 5];
    const shuffled = shuffle(array);
    expect(shuffled).toEqual(expect.arrayContaining(array));
    expect(array).toEqual(expect.arrayContaining(shuffled));
  });

  test('if the shuffled array has a different order than the original', () => {
    const array = [1, 2, 3, 4, 5];
    const shuffled = shuffle(array);
    expect(shuffled).not.toEqual(array);
  });

  test('if the function handles an empty array', () => {
    const array: any[] = [];
    const shuffled = shuffle(array);
    expect(shuffled).toEqual([]);
  });

  test('if the function handles a single element array', () => {
    const array = [1];
    const shuffled = shuffle(array);
    expect(shuffled).toEqual([1]);
  });
});
