// ES6 only
'use strict';

// The base object, this syntax is called "object literal"
let animal1 = {
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
let afa = function afa() {
  
    // private member
  let priv = "secret from afa";
  
  return Object.assign(Object.create(animal1), {
    // Object customisation
    animalType: { value: 'animal with create'},    
    
    // object extension. The new objects created here get 3 new members:
    // - a private member
    // - a new property
    // - a new method to access the private member
    
    // new public member
    color: { value: 'green' },
    
    // method which can access the private members
    secret: {
      get: function () { return priv; },
      set: function (value) { priv = value; },
    }
  });
}

// creation of an animal instance
let taa = afa();

// Have a look at the prototype chain
console.log(taa.__proto__);
console.log(taa.__proto__.__proto__);
console.log(taa.__proto__.__proto__.__proto__);

// Call of a public method
console.log(taa.describe());

console.log(`Taa color is "${taa.color}"`);
console.log(`Taa secret is "${taa.getSecret()}"`);
