'use strict'

const curry = require('../curry/curry')
const length = require('../array/length')
const head = require('../array/head')
const tail = require('../array/tail')

const find = curry((f, xs) => {
  if (length(xs) < 1) return undefined
  if (f(head(xs))) return head(xs)
  return find(f, tail(xs))
})

module.exports = find
