'use strict'

const reduce = require('../array-higher-order/reduce')
const find = require('../array-higher-order/find')
const concat = require('./concat')

const distinctFn = equals =>
  reduce(
    (acc, curr) => (!find(equals(curr), acc) ? concat(acc, curr) : acc),
    []
  )

module.exports = distinctFn
