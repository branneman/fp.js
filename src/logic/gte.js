'use strict'

const curry = require('../curry/curry')

const gte = curry((x, y) => x >= y)

module.exports = gte
