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
})(); // The "singleton" part is made thanks to the immediately invoked function
    
console.log(`Works? ${singleton.getCounter()}`);  
    
    