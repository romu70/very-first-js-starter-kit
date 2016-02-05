// ES6 only
'use strict';

const OBJECT_ID = "Animal 3"; 

let animal3 = {
  animalType: 'animal3',
  
  describe() {
    return `This is "${this.animalType}"`;
  },
  
  get type() { return OBJECT_ID; },
};

exports.animal3 = animal3;

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

