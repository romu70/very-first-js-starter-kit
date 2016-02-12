var x = 1;

// Anonymous function which is called immediately
(function () {
  console.log(x); // undefined
  var x = 2;
}());

// This outputs "undefined" because this code is similar to:
(function () {
  // The previous x declaration is "hoisted" at the beginning of
  // the function. This overrides the global x variable, but outputs
  // "undefined" as we didn't set any value to x when console.log is called.
  var x;
  console.log(x); // undefined
  x = 2;
}());
