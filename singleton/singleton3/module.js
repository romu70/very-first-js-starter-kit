 'use strict';

// Same example as provided in sngleton2.js, but isolated in a module.

// private data, not accessible because not exported.
var counter = 0;

module.exports = {
  getName: function () {
      return "singleton";
  },
  getCounter: function () {
      return counter;
  },
  setCounter: function (k) {
      counter = k;
  }
}
