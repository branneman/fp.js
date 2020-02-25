'use strict'

const curry = require('../curry/curry')

const upper = curry(s => s.toUpperCase(s))

module.exports = upper
