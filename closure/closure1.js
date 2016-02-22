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

// The closure function is returned directly when we well f1.
var closure = f1();
// At this point, the execution of f1 is terminated but
// we can still call the closure and have access to the f1 state.
console.log(closure());