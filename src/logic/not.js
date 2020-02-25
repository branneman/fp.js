'use strict'

const curry = require('../curry/curry')

const not = curry(x => !x)

module.exports = not
