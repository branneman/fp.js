'use strict'

const reduce = require('../array-higher-order/reduce')

const distinct = xs =>
  reduce(
    (acc, curr) => (acc.indexOf(curr) < 0 ? acc.concat([curr]) : acc),
    [],
    xs
  )

module.exports = distinct
