'use strict'

const curry = require('../curry/curry')

const isInt = curry(
  x => typeof x === 'number' && isFinite(x) && Math.floor(x) === x
)

module.exports = isInt
