const helloWorld = require('../src/helloworld.js');

test('prints hello world to the console', () => {
  console.log = jest.fn();

  helloWorld();

  expect(console.log).toHaveBeenCalledWith('hello nick');
});