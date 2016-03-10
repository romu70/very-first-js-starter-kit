// ES6 only
'use strict';

// This is a complicated singleton taken from this thread:
// http://stackoverflow.com/questions/1635800/javascript-best-singleton-pattern
// All code in this thread are too long and over complicated, see other singleton proposals.
var Singleton = (function () {
    var instance;
  
    function createInstance() {
        var object = new Object("I am the instance");
        return object;
    }
  
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();
  
var instance1 = Singleton.getInstance();
var instance2 = Singleton.getInstance();
  
console.log(`Same instance? ${instance1 === instance2}`);  
    
    