'use strict'

const curry = require('../curry/curry')

const max = curry((x, y) => (y > x ? y : x))

module.exports = max
