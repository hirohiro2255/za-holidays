const zh = require('./../');

test('should return this year.', () => {
  expect(zh.year).toBe(outputZATime().getUTCFullYear());
});

test('should return array of holidays.', () => {
  expect(zh.jan()).toEqual([
    { date: 1, title: "New Year's Day", day: outputDay(1, 1) }
  ]);
});

test.skip('should return string `no holidays this month.`', () => {
  expect(zh.feb()).toBe('no holidays this month.');
});

test('should have 2 hours difference between UTC and SAST.', () => {
  expect(outputZATime().getUTCHours() - new Date().getUTCHours()).toBe(2);
});

describe('outputDay function.', () => {
  it.skip('should output proper day with date: number, month: number', () => {
    expect(outputDay(10, 10));
  });
});

function outputDay(month, date) {
  const southAfricanTime = new Date(
    Date.UTC(
      new Date().getUTCFullYear(),
      month - 1,
      date,
      new Date().getUTCHours() + 2,
      new Date().getUTCMinutes(),
      new Date().getUTCSeconds(),
      new Date().getUTCMilliseconds()
    )
  );
  return southAfricanTime.toUTCString().slice(0, 3); // output: string => Sun, Mon
}

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
}

const southAfricanTime = new Date(
  Date.UTC(
    new Date().getFullYear(),
    new Date().getUTCMonth(),
    new Date().getUTCDate(),
    new Date().getUTCHours() + 2,
    new Date().getUTCMinutes(),
    new Date().getUTCSeconds(),
    new Date().getUTCMilliseconds()
  )
);
