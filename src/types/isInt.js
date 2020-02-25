'use strict'

const curry = require('../curry/curry')

const isInt = curry(x => Number.isInteger(x))

module.exports = isInt
