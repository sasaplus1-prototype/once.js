'use strict';

const isFunction = require('type-check/is-function');

/**
 * return converted function
 *
 * @param {Function} fn
 * @throws {TypeError}
 * @return {Function}
 */
module.exports = function once(fn) {
  if (!isFunction(fn)) {
    throw new TypeError('fn must be a Function');
  }

  let count = 1;

  return function() {
    if (count-- <= 0) {
      return;
    }

    const args = arguments,
          call = 'call';

    switch (args.length) {
      case 0:
        return fn[call](this);
      case 1:
        return fn[call](this, args[0]);
      case 2:
        return fn[call](this, args[0], args[1]);
      case 3:
        return fn[call](this, args[0], args[1], args[2]);
      default:
        return fn.apply(this, args);
    }
  };
};
