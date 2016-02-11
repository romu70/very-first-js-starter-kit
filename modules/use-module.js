// ES6 only
'use strict';

// Module import
const a3 = require('./animal3.js');

// Create an animal3 instance
let a = a3.a3f();

// Check we can call some functions
console.log(a.describe());
console.log(a.secret);
console.log(a.type === 'newly created animal3');

// Some weird things
console.log(typeof a); // object
console.log(a.__proto__); // animal3 prototype
console.log(a instanceof Object);

// Problem here is we can't test the real type of 'a',
// Solution would be to ass a TYPE const in the module and
// check its value.
