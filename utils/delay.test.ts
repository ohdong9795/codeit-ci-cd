import delay from './delay';

describe('delay', () => {
  test('should not call the function before the specified wait time', (done) => {
    const mockFunction = jest.fn(() => 1234);
    delay(mockFunction, 100, 'later');

    setTimeout(() => {
      expect(mockFunction).not.toHaveBeenCalled();
    }, 50);

    setTimeout(() => {
      expect(mockFunction).toHaveBeenCalledWith('later');
      done();
    }, 150);
  });
});
