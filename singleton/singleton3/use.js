 'use strict';

var s = require('./module.js');
var s2 = require('./module.js');

console.log(s.getCounter());
console.log(s2.getCounter());
s.setCounter(10);
console.log(s2.getCounter());
console.log(s.getCounter());