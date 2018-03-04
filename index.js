(function(root, undefined) {
  const libs = {};

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
    {
      Jan: [{ date: 1, name: "New Year's Day" }]
    }
  ];

  module.exports = libs;
})(this);
