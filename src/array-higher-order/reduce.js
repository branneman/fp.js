'use strict'

const curry = require('../curry/curry')
const length = require('../array/length')
const head = require('../array/head')
const tail = require('../array/tail')

const reduce = curry((f, acc, xs) => {
  if (length(xs) < 1) return acc
  return reduce(f, f(acc, head(xs)), tail(xs))
})

module.exports = reduce
