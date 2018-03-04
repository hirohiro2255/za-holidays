(function(root, undefined) {
  const libs = {};

  // helpers

  function outputHolidays(MONTH) {
    return libs.holidays.find(m => {
      return Object.keys(m)[0] === MONTH;
    })[MONTH];
  }

  function outputDay(month, date) {
    // outputs day of a specific date
    // => Sun, Mon .....
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
    return southAfricanTime.toUTCString().slice(0, 3);
  }

  // main library methods and more.

  libs.year = new Date(
    Date.UTC(
      new Date().getFullYear(),
      new Date().getUTCMonth(),
      new Date().getUTCDate(),
      new Date().getUTCHours() + 2,
      new Date().getUTCMinutes(),
      new Date().getUTCSeconds(),
      new Date().getUTCMilliseconds()
    )
  ).getUTCFullYear();

  libs.holidays = [
    { Jan: [{ date: 1, title: "New Year's Day", day: outputDay(1, 1) }] },
    { Feb: [] },
    {
      Mar: [
        { date: 21, title: 'Human Rights Day', day: outputDay(3, 21) },
        { date: 30, title: 'Good Friday', day: outputDay(3, 30) }
      ]
    },
    {
      Apr: [
        { date: 2, title: 'Family Day', day: outputDay(4, 2) },
        { date: 27, title: 'Freedom Day', day: outputDay(4, 27) },
        { date: 30, title: 'School holiday', day: outputDay(4, 30) }
      ]
    },
    {
      May: [{ date: 1, title: 'Workers Day', day: outputDay(5, 1) }]
    },
    {
      Jun: [{ date: 16, title: 'Youth Day', day: outputDay(6, 16) }]
    },
    { Jul: [] },
    {
      Aug: [
        { date: 9, title: "National Women's day", day: outputDay(8, 9) },
        { date: 10, title: 'School holiday', day: outputDay(8, 10) }
      ]
    },
    {
      Sep: [{ date: 24, title: 'Heritage Day', day: outputDay(9, 24) }]
    },
    {
      Oct: []
    },
    {
      Nov: []
    },
    {
      Dec: [
        { date: 16, title: 'Day of Reconciliation', day: outputDay(12, 16) },
        { date: 17, title: 'Public holiday', day: outputDay(12, 17) },
        { date: 25, title: 'Christmas Day', day: outputDay(12, 25) },
        { date: 26, title: 'Day of Goodwill', day: outputDay(12, 26) }
      ]
    }
  ];

  const jan = (libs.jan = () => {
    const JAN = 'Jan';
    return outputHolidays(JAN);
  });

  const feb = (libs.feb = () => {
    const FEB = 'Feb';
    return outputHolidays(FEB);
  });

  const mar = (libs.mar = () => {
    const MAR = 'Mar';
    return outputHolidays(MAR);
  });

  const apr = (libs.apr = () => {
    const APR = 'Apr';
    return outputHolidays(APR);
  });

  const may = (libs.may = () => {
    const MAY = 'May';
    return outputHolidays(MAY);
  });

  const jun = (libs.jun = () => {
    const JUN = 'Jun';
    return outputHolidays(JUN);
  });

  const jul = (libs.jul = () => {
    const JUL = 'Jul';
    return outputHolidays(JUL);
  });

  const aug = (libs.aug = () => {
    const AUG = 'Aug';
    return outputHolidays(AUG);
  });

  const sep = (libs.sep = () => {
    const SEP = 'Sep';
    return outputHolidays(SEP);
  });

  const oct = (libs.oct = () => {
    const OCT = 'Oct';
    return outputHolidays(OCT);
  });

  const nov = (libs.nov = () => {
    const NOV = 'Nov';
    return outputHolidays(NOV);
  });

  const dec = (libs.dec = () => {
    const DEC = 'Dec';
    return outputHolidays(DEC);
  });

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = libs;
    }
    exports.zaHolidays = libs;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return libs;
    });
  } else {
    libs.noConflict = (function(oldLib) {
      return function() {
        root.zaHolidays = oldLib;
        libs.noConflict = undefined;
        return libs;
      };
    })(root.zaHolidays);
    root['zaHolidays'] = libs;
  }
})(this);
