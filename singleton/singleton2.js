// ES6 only
'use strict';

// This is a more simple singleton
var singleton = (function () {
    var counter = 0;
   
    return {
        getName: function () {
            return "singleton";
        },
        getCounter: function () {
            return counter;
        }
    };
})();

// The function is anonymous, so can't be called in the code,
// and it is immediately invoked. It returns an object which acts
// on a private counter.
    
console.log(`Works? ${singleton.getCounter()}`);  
    
    