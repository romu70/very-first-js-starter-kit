// ES6 only
'use strict';

// Module import
const a3 = require('./module.js');

let a = a3.a3f();

console.log(a.describe());
console.log(a.secret);
console.log(a.type === "Animal 3");
