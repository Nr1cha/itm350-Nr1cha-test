// forEach.js

// Mock function to use in test code[^1^][1]
const mockCallback = jest.fn(x => 42 + x);

// Function to test
function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

// Sample array
const sampleArray = [0, 1];

// Running forEach with the mockCallback function
forEach(sampleArray, mockCallback);

// Asserting the mock function's behavior
// The mock function is called twice
expect(mockCallback.mock.calls.length).toBe(2);

// The first argument of the first call to the function was 0
expect(mockCallback.mock.calls[0][0]).toBe(0);

// The first argument of the second call to the function was 1
expect(mockCallback.mock.calls[1][0]).toBe(1);

// The return value of the first call to the function was 42
expect(mockCallback.mock.results[0].value).toBe(42);


module.exports = { forEach };