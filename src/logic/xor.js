'use strict'

const curry = require('../curry/curry')

const xor = curry((x, y) => x ^ y)

module.exports = xor
