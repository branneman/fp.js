'use strict'

const curry = require('../curry/curry')
const reduce = require('../array-higher-order/reduce')
const find = require('../array-higher-order/find')
const concat = require('./concat')

const distinctFn = curry((equals, xs) =>
  reduce(
    (acc, curr) => (!find(equals(curr), acc) ? concat(acc, curr) : acc),
    [],
    xs
  )
)

module.exports = distinctFn
