const { forEach } = require('./forEach'); // Import the forEach function

describe('forEach', () => {
  it('calls the callback for each item in the array', () => {
    const mockCallback = jest.fn();
    const sampleArray = [0, 1];

    forEach(sampleArray, mockCallback);

    expect(mockCallback.mock.calls.length).toBe(2);
    expect(mockCallback.mock.calls[0][0]).toBe(0);
    expect(mockCallback.mock.calls[1][0]).toBe(1);
  });

  it('correctly uses the return values from the callback', () => {
    const mockCallback = jest.fn(x => 42 + x);
    const sampleArray = [0, 1];

    forEach(sampleArray, mockCallback);

    expect(mockCallback.mock.results[0].value).toBe(42);
    expect(mockCallback.mock.results[1].value).toBe(43);
  });
});
