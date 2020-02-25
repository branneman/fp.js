'use strict'

const curry = require('../curry/curry')

const lte = curry((x, y) => x <= y)

module.exports = lte
