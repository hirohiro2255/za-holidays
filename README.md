# za-holidays

> outputs public holidays for each month in South Africa based on https://www.gov.za/about-sa/public-holidays

```bash
npm install --save za-holidays
```

## Author

**Hirokazu Hirono**

## Usage

```js
var zh = require('za-holidays');

zh.year;
//=> year for holidays to display

zh.jan();
//=> [{ date: 1, title: "New Year's Day", day: 'Mon' }]

zh.feb();
//=> []

zh.mar();
//=> [
//    { date: 21, title: 'Human Rights Day', day: 'Wed' },
//    { date: 30, title: 'Good Friday', day: 'Fri' }
//  ]
```

###### As you might guess, methods are named after each month.

###### for example, if you invoke zh.dec(), it will return all the holidays in December.

## License

MIT
