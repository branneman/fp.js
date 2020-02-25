'use strict'

const curry = require('../curry/curry')
const isObj = require('./isObj')

const isPojo = curry(
  x => isObj(x) && Object.getPrototypeOf(x) === Object.prototype
)

module.exports = isPojo
