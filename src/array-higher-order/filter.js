'use strict'

const curry = require('../curry/curry')
const reduce = require('./reduce')
const append = require('../array/append')

const filter = curry((f, xs) =>
  reduce((acc, x) => (f(x) ? append(x, acc) : acc), [], xs)
)

module.exports = filter
