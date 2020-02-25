'use strict'

const curry = require('../curry/curry')

const min = curry((x, y) => (y < x ? y : x))

module.exports = min
