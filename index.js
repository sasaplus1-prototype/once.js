'use strict';

module.exports = function(fn) {
  var count;

  if (typeof fn !== 'function') {
    throw new TypeError('fn must be a Function');
  }

  count = 1;

  return function() {
    var result;

    if (count-- > 0) {
      result = fn.apply(this, arguments);
    }

    fn = void 0;

    return result;
  };
};
