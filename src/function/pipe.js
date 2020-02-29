'use strict'

const reduce = require('../array-higher-order/reduce')
const length = require('../array/length')
const head = require('../array/head')
const tail = require('../array/tail')

const pipe = (...xs) => {
  if (length(xs) < 1) {
    throw new Error('pipe() requires at least one argument')
  }
  return reduce((f, g) => (...args) => g(f(...args)), head(xs), tail(xs))
}

module.exports = pipe
