'use strict'

const curry = require('../curry/curry')

const isNum = curry(x => typeof x === 'number' && isFinite(x))

module.exports = isNum
