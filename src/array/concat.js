'use strict'

const curry = require('../curry/curry')
const prepend = require('./prepend')
const append = require('./append')
const head = require('./head')
const tail = require('./tail')

const concat = curry((xs, ys) => {
  if (xs.length === 0) return ys
  if (ys.length === 0) return xs
  if (xs.length === 1) return prepend(head(xs), ys)
  if (ys.length === 1) return append(head(ys), xs)
  return concat(append(head(ys), xs), tail(ys))
})

module.exports = concat
