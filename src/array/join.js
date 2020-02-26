'use strict'

const curry = require('../curry/curry')
const length = require('./length')
const head = require('./head')
const tail = require('./tail')
const reduce = require('../array-higher-order/reduce')

const join = curry((s, xs) => {
  if (length(xs) === 0) return ''
  if (length(xs) === 1) return '' + head(xs)
  return reduce((acc, x) => acc + s + x, '' + head(xs), tail(xs))
})

module.exports = join
