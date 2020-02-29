'use strict'

const reduce = require('../array-higher-order/reduce')
const length = require('../array/length')
const head = require('../array/head')
const tail = require('../array/tail')

const compose = (...xs) => {
  if (length(xs) < 1) {
    throw new Error('compose() requires at least one argument')
  }
  return reduce((f, g) => (...args) => f(g(...args)), head(xs), tail(xs))
}

module.exports = compose
