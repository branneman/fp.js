'use strict'

const curry = require('../curry/curry')

const isRegExp = curry(x => x === Object(x) && x instanceof RegExp)

module.exports = isRegExp
