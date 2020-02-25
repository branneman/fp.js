'use strict'

const curry = require('../curry/curry')

const divide = curry((x, y) => x / y)

module.exports = divide
