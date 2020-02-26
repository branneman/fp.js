'use strict'

const curry = require('../curry/curry')
const length = require('../array/length')
const last = require('../array/last')
const init = require('../array/init')

const reduceRight = curry((f, acc, xs) => {
  if (length(xs) < 1) return acc
  return reduceRight(f, f(acc, last(xs)), init(xs))
})

module.exports = reduceRight
