'use strict'

const curry = require('../curry/curry')

const reduce = curry((f, x, xs) => xs.reduce(f, x))

module.exports = reduce
