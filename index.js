'use strict';

/**
 * A simple debug adaptor to ensure use the native debug if not found npm `debug` enhances
 * installation.
 *
 * @author Allex Wang (allex.wxn@gmail.com)
 */

var debug;

try {
  debug = require('debug');
} catch (e) {
  var debugUtil = require('util');
  if (debugUtil && debugUtil.debuglog) {
    debug = debugUtil.debuglog;
  } else {
    debug = function debug(k) {
      return function () {};
    };
  }
}

module.exports = debug;

