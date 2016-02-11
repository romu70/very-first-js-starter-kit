// ES6 only
'use strict';

// This is the module (= objects and functions) to be exported for future use.

let animal3 = {
  animalType: 'animal3',
  
  describe() {
    return `This is "${this.animalType}"`;
  },
  
  get type() { return this.animalType; },
};

// Only the factory is exported
exports.a3f = function a3f() {
  let priv = "secret part of animal3";

  return Object.create(animal3, {
    animalType: { value: 'newly created animal3'},    

    secret: {
      get: function () { return priv; },
      set: function (value) { priv = value; },
    }
  });
}

