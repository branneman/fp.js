'use strict'

const curry = require('../curry/curry')

const isArr = curry(x => Array.isArray(x))

module.exports = isArr
