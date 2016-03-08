// ES6 only
'use strict';

// This way to write a function is called: function definition
function definition1() {
  return arguments;
}

console.log(definition1()); // {}: no argument provided
console.log(definition1(32)); // { '0': 32 }
console.log(definition1("toto")); // { '0': 'toto' }
console.log(definition1(32, "toto")); // { '0': 32, '1': 'toto' }

// Function expression syntax
// From the inside, this is an anonymous function
var expression1 = function() {
  return arguments;
}

// Named function expression syntax
// From the inside, this is a function named "expression2"
var expression2 = function expression2() {
  return arguments;
}

console.log(expression2()); // {}: no argument provided
