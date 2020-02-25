'use strict'

const curry = require('../curry/curry')

const eq = curry((x, y) => x === y)

module.exports = eq
