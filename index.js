(function(root, undefined) {
  const libs = {};

  libs.year = new Date().getFullYear();

  libs.holidays = [
    {
      Jan: [{ day: 1, name: "New Year's Day" }]
    }
  ];

  module.exports = libs;
})(this);
