'use strict'

const curry = require('../curry/curry')
const reduce = require('./reduce')
const append = require('../array/append')

const map = curry((f, xs) => reduce((acc, x) => append(f(x), acc), [], xs))

module.exports = map
