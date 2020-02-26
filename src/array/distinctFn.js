'use strict'

const curry = require('../curry/curry')
const reduce = require('../array-higher-order/reduce')
const find = require('../array-higher-order/find')
const append = require('./append')

const distinctFn = curry((pred, xs) =>
  reduce((acc, x) => (!find(pred(x), acc) ? append(x, acc) : acc), [], xs)
)

module.exports = distinctFn
