'use strict'

const curry = require('../curry/curry')

const entries = curry(x => Object.entries(x))

module.exports = entries
