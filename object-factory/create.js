// ES6 only
'use strict';

// The base object, this syntax is called "object literal"
let animal2 = {
  // public member
  animalType: 'animal',
  
  // public method 
  describe() {
    return `This is "${this.animalType}"`;
  }
};

// factory function which serves 2 purposes:
// - encapsulation, that's where private things are declared thanks to closures
// - the "real" object creation, this prevents to use "new" which is not really Js-ish
let afc = function afc() {

  // private member
  let priv = "secret from afc";

  return Object.create(animal2, {

    // Object customisation
    animalType: { value: 'animal with create'},    

    // object extension. The new objects created here get 3 new members:
    // - a private member
    // - a new property
    // - a new method to access the private member
    
    // new public member
    color: { value: 'green' },
    secret: {
      get: function () { return priv; },
      set: function (value) { priv = value; },
    },
    amethod: { value: function() { console.log("a method which has access to private members."); } }
  });
}

// creation of an animal instance
let tac = afc();

// Have a look at the prototype chain
console.log(tac.__proto__);
console.log(tac.__proto__.__proto__);
console.log(tac.__proto__.__proto__.__proto__);

// Call of a public method
console.log(tac.describe());

console.log(`Tac color is "${tac.color}"`);
console.log(`Tac secret is "${tac.secret}"`);
// Set the private member
tac.secret = "It's a secret";
// Check it has changed
console.log(`Tac secret is "${tac.secret}"`);

tac.amethod();


// Create 20k instance and measure the time it takes
let hrstart = process.hrtime();

for(let i = 0; i < 20000; i++) {
    let o = afc();
}

let hrend = process.hrtime(hrstart);
console.log("Execution time (hr): %ds %dms", hrend[0], hrend[1]/1000000);