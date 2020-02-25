'use strict'

const curry = require('../curry/curry')

const isBool = curry(x => typeof x === 'boolean')

module.exports = isBool
