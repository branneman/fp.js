'use strict'

const curry = require('../curry/curry')

const and = curry((x, y) => x && y)

module.exports = and
