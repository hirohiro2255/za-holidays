const zh = require('./../');

test('should return this year.', () => {
  expect(zh.year).toBe(outputZATime().getUTCFullYear());
});

test('should have 2 hours difference between UTC and SAST.', () => {
  expect(outputZATime().getUTCHours() - new Date().getUTCHours()).toBe(2);
});

test('should return array of a object for January.', () => {
  expect(zh.jan()).toEqual([
    { date: 1, title: "New Year's Day", day: outputDay(1, 1) }
  ]);
});

test('should return an empty array for February.', () => {
  expect(zh.feb()).toEqual([]);
});

test('should return an array of 2 objects for March.', () => {
  expect(zh.mar()).toEqual([
    { date: 21, title: 'Human Rights Day', day: outputDay(3, 21) },
    { date: 30, title: 'Good Friday', day: outputDay(3, 30) }
  ]);
});

test('should return an array of 3 objects for April.', () => {
  expect(zh.apr()).toEqual([
    { date: 2, title: 'Family Day', day: outputDay(4, 2) },
    { date: 27, title: 'Freedom Day', day: outputDay(4, 27) },
    { date: 30, title: 'School holiday', day: outputDay(4, 30) }
  ]);
});

test('should return an array of a object for May.', () => {
  expect(zh.may()).toEqual([
    { date: 1, title: 'Workers Day', day: outputDay(5, 1) }
  ]);
});

test('should return an array of a object for June.', () => {
  expect(zh.jun()).toEqual([
    { date: 16, title: 'Youth Day', day: outputDay(6, 16) }
  ]);
});

test('should return an empty array for June.', () => {
  expect(zh.jul()).toEqual([]);
});

test('should return an array of 2 object for August.', () => {
  expect(zh.aug()).toEqual([
    { date: 9, title: "National Women's day", day: outputDay(8, 9) },
    { date: 10, title: 'School holiday', day: outputDay(8, 10) }
  ]);
});

test('should return an array of a object for September.', () => {
  expect(zh.sep()).toEqual([
    { date: 24, title: 'Heritage Day', day: outputDay(9, 24) }
  ]);
});

test('should return an empty array for October.', () => {
  expect(zh.oct()).toEqual([]);
});

test('should return an empty array for November.', () => {
  expect(zh.nov()).toEqual([]);
});

test('should return an array of 4 objects for November.', () => {
  expect(zh.dec()).toEqual([
    { date: 16, title: 'Day of Reconciliation', day: outputDay(12, 16) },
    { date: 17, title: 'Public holiday', day: outputDay(12, 17) },
    { date: 25, title: 'Christmas Day', day: outputDay(12, 25) },
    { date: 26, title: 'Day of Goodwill', day: outputDay(12, 26) }
  ]);
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
