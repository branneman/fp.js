'use strict'

const curry = require('../curry/curry')

const isFunc = curry(x => typeof x === 'function')

module.exports = isFunc
