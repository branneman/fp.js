'use strict'

const curry = require('../curry/curry')

const isSymbol = curry(x => typeof x === 'symbol')

module.exports = isSymbol
