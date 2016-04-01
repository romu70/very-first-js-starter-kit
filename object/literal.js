// ES6 only
'use strict';

// The base object, "object literal" syntax
let animal = {
  // public member
  animalType: 'animal',
  
  // public method 
  describe() {
    // This way, we get sure "this" is correctly bound to the animal instance
    return `This is "${this.animalType}"`;
  },
  
  // By using a recursive functions,
  // we're going to check whether such function syntaxes are anonymous or not.

  // anonymous
  fact(n) {
    if(n === 1) {
      return 1;
    }
    return (n * this.fact(n - 1)); // "fact" is anonymous and can't be called from itself
  },
  
  // not anonymous
  fact2: function fact2(n) {
    if(n === 1) {
      return 1;
    }
    return (n * fact2(n - 1));
  },
  
  throw1() {
    throw new Error('Exception in throw1');
  },
  throw2: function throw2() {
    throw new Error('Exception in throw2');    
  }
};

// Have a look at the prototype chain
console.log(animal.__proto__);
console.log(animal.__proto__.__proto__);

// Call of a public method
console.log(animal.describe()); // This is "animal"
console.log(animal.fact(3)); // 6
console.log(animal.fact2(3)); // 6

// Both ways show the real function name in the stack trace, great!
// animal.throw1(); 
// animal.throw2();