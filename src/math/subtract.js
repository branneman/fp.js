'use strict'

const curry = require('../curry/curry')

const subtract = curry((x, y) => x - y)

module.exports = subtract
