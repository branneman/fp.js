'use strict'

const curry = require('../curry/curry')

const length = require('../array/length')
const head = require('../array/head')
const tail = require('../array/tail')

const includes = curry((x, xs) => {
  if (length(xs) < 1) return false
  if (head(xs) === x) return true
  return includes(x, tail(xs))
})

module.exports = includes
