'use strict'

const curry = require('../curry/curry')
const length = require('./length')
const append = require('./append')
const nth = require('./nth')

const slice = curry((from, to, xs) => {
  const f = (from, to, acc, i) => {
    if (from > to) return []
    if (i === length(xs) || i === to) return acc
    if (i < from) return f(from, to, acc, i + 1)
    return f(from, to, append(nth(i, xs), acc), i + 1)
  }

  if (to < 0) {
    return f(from, length(xs) - to - 2, [], 0)
  }
  return f(from, to, [], 0)
})

module.exports = slice
