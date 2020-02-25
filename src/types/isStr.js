'use strict'

const curry = require('../curry/curry')

const isStr = curry(x => typeof x === 'string')

module.exports = isStr
