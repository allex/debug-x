debug-x
=======

A simple debug adaptor to ensure use the [native debug][1] if not found [npm `debug`
enhances installation][2].

> Normally we need a debug module for development. but actually such module not
> required for production.

To enable debug logging, we need export env vars relavent the debug modules: [debug][2] and [native debug][1]

## Usage

var debug = require('debug-x')('test')

debug('i am a debug message with obj => %j', { foo: 'ok' })

## Refs

* [util.debuglog(section)](https://nodejs.org/api/util.html#util_util_debuglog_section)
* [debug](https://www.npmjs.com/package/debug)

[1]: https://nodejs.org/api/util.html#util_util_debuglog_section
[2]: https://www.npmjs.com/package/debug
