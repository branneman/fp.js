'use strict'

const curry = require('../curry/curry')

const isNum = curry(x => typeof x === 'number' && Number.isFinite(x))

module.exports = isNum
