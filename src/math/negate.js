'use strict'

const curry = require('../curry/curry')

const negate = curry(x => -x)

module.exports = negate
