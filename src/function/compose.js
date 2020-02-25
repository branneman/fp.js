'use strict'

const reduce = require('../array-higher-order/reduce')
const head = require('../array/head')
const tail = require('../array/tail')

const compose = (...xs) =>
  reduce((f, g) => (...args) => f(g(...args)), head(xs), tail(xs))

module.exports = compose
