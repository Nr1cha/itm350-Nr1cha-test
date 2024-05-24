const fs = require('fs');

test('helloworld.js file exists', () => {
  const path = './src/helloworld.js';
  expect(fs.existsSync(path)).toBe(true);
});
