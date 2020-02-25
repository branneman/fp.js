'use strict'

const curry = require('../curry/curry')

const multiply = curry((x, y) => x * y)

module.exports = multiply
