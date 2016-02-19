// ES6 only
'use strict';

function f1 () {
  var myvar = 3;
  let mylet = 4;
  
  // This is the closure
  return function() {
    return `I can access ${myvar} and ${mylet}`;
  }
}

var closure = f1();
// At this point, the execution of f1 is terminated but
// we can still call the closure and have access to the f1 state.
console.log(closure());