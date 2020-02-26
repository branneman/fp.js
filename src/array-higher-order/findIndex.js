'use strict'

const curry = require('../curry/curry')
const length = require('../array/length')
const head = require('../array/head')
const tail = require('../array/tail')

const findIndex = curry((f, xs) => {
  const _findIndex = (f, xs, i) => {
    if (length(xs) < 1) return undefined
    if (f(head(xs))) return i
    return _findIndex(f, tail(xs), i + 1)
  }
  return _findIndex(f, xs, 0)
})

module.exports = findIndex
