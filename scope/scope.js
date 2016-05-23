// ES6 only
'use strict';

var john = "doe";
console.log(`${john}`); // doe

(function() {
  let john = "dae";
  let jane = "a"; // or var, same result
  
  console.log(`${john}`); // doe
  console.log(`${jane}`); // a
})();

console.log(`${john}`); // doe
console.log(`${jane}`); // undefined

{
  let jane = "b";
}

console.log(`${jane}`); // undefined

{
  var jane = "c";
}

console.log(`${jane}`); // c

