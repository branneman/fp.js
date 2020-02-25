'use strict'

const curry = require('../curry/curry')
const reduce = require('../array-higher-order/reduce')

const pick = curry((xs, x) =>
  reduce(
    (acc, curr) => {
      if (x[curr]) acc[curr] = x[curr]
      return acc
    },
    {},
    xs
  )
)

module.exports = pick
