'use strict'

const curry = require('../curry/curry')

const ceil = curry(x => Math.ceil(x))

module.exports = ceil
