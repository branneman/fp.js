'use strict'

const curry = require('../curry/curry')

const lower = curry(s => s.toLowerCase(s))

module.exports = lower
