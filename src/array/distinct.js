'use strict'

const curry = require('../curry/curry')
const reduce = require('../array-higher-order/reduce')

const distinct = curry(xs =>
  reduce(
    (acc, curr) => (acc.indexOf(curr) < 0 ? acc.concat([curr]) : acc),
    [],
    xs
  )
)

module.exports = distinct
