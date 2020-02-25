'use strict'

const curry = require('../curry/curry')

const or = curry((x, y) => x || y)

module.exports = or
