'use strict'

const curry = require('../curry/curry')

const isNaN = curry(x => Number.isNaN(x))

module.exports = isNaN
