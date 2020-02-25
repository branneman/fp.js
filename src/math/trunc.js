'use strict'

const curry = require('../curry/curry')

const trunc = curry(x => Math.trunc(x))

module.exports = trunc
