'use strict'

const curry = require('../curry/curry')
const append = require('../array/append')
const reverse = require('../array/reverse')

const range = curry((min, max, acc = []) => {
  if (min > max) return reverse(range(max, min, acc))
  if (min === max) return append(min, acc)
  return range(min + 1, max, append(min, acc))
})

module.exports = range
