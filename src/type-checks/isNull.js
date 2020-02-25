'use strict'

const curry = require('../curry/curry')

const isNull = curry(x => x === null)

module.exports = isNull
