const dayjs = require("dayjs");


console.log(dayjs());
console.log(dayjs().get('year'));
console.log(dayjs().get('month')); 
console.log(dayjs().get('date'));
console.log(dayjs().get('hour'));
console.log(dayjs().get('minute'));
console.log(dayjs().get('second'));
console.log(dayjs().get('millisecond'));
console.log(dayjs('2019-01-25').add(1, 'month').toString());

var t = dayjs().format('dddd, MMMM D, YYYY h:mm A'); 
console.log(t);
var a = dayjs().format('dddd');
console.log(a);
var b = dayjs().format('MMM D YY');
console.log(b);
var c = (dayjs(2020-01-01).isValid());
console.log(c);
var d = (dayjs(2020-14-01).isValid());
console.log(d);
var e = dayjs().add(7, 'day');
console.log(e);
var f = dayjs().add(7, 'month');
console.log(f);
var g = dayjs().add(7, 'year');
console.log(g);
var h = dayjs().subtract(7, 'day');
console.log(h);
var i = dayjs().subtract(7, 'month');
console.log(i);
var j = dayjs().subtract(7, 'year');
console.log(j);
const date1 = dayjs('2014-11-11');
const date2 = dayjs('2015-09-11');
console.log(date1.diff(date2));
var k = dayjs().isAfter('2020-01-01', 'date');
console.log(k);
var l = dayjs().isAfter('2010-01-01 ', 'date');
console.log(l);


