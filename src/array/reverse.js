'use strict'

const curry = require('../curry/curry')
const isStr = require('../types/isStr')
const prepend = require('./prepend')
const join = require('./join')
const head = require('./head')
const tail = require('./tail')

const reverse = curry(xs => {
  const f = (xs, ys) => {
    if (!xs.length) return ys
    return f(tail(xs), prepend(head(xs), ys))
  }
  if (isStr(xs)) return join('', f(xs, []))
  return f(xs, [])
})

module.exports = reverse
