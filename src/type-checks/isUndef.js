'use strict'

const curry = require('../curry/curry')

const isUndef = curry(x => typeof x === 'undefined')

module.exports = isUndef
