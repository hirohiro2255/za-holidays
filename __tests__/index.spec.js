const zh = require('./../');

test('should return this year.', () => {
  expect(zh.year).toBe(outputZATime().getUTCFullYear());
});

test('should have 2 hours difference between UTC and SAST.', () => {
  expect(outputZATime().getUTCHours() - new Date().getUTCHours()).toBe(2);
});

function outputZATime() {
  const southAfricanTime = new Date(
    Date.UTC(
      new Date().getUTCFullYear(),
      new Date().getUTCMonth(),
      new Date().getUTCDate(),
      new Date().getUTCHours() + 2,
      new Date().getUTCMinutes(),
      new Date().getUTCSeconds(),
      new Date().getUTCMilliseconds()
    )
  );
  // output: Date => UTC + 2
  return southAfricanTime;
  // return parseInt(southAfricanTime.toUTCString().slice(12, 16), 10);
}

// const southAfricanTime = new Date(
//   Date.UTC(
//     new Date().getFullYear(),
//     new Date().getUTCMonth(),
//     new Date().getUTCDate(),
//     new Date().getUTCHours() + 2,
//     new Date().getUTCMinutes(),
//     new Date().getUTCSeconds(),
//     new Date().getUTCMilliseconds()
//   )
// );

// function outputDay() {
//   const southAfricanTime = new Date(
//     Date.UTC(
//       new Date().getUTCFullYear(),
//       new Date().getUTCMonth(),
//       new Date().getUTCDate(),
//       new Date().getUTCHours() + 2,
//       new Date().getUTCMinutes(),
//       new Date().getUTCSeconds(),
//       new Date().getUTCMilliseconds()
//     )
//   );
//   return southAfricanTime.toUTCString().slice(0, 3); // output: string => Sun, Mon
// }
