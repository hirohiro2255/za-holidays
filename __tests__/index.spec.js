const zh = require('./../');

console.log(zh.year);

test('should return this year.', () => {
  expect(zh.year).toBe(new Date().getFullYear());
});
