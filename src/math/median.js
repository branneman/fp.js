'use strict'

const curry = require('../curry/curry')
const length = require('../array/length')
const mean = require('./mean')

const median = curry(xs =>
  length(xs) % 2
    ? xs[(length(xs) - 1) / 2]
    : mean([xs[length(xs) / 2 - 1], xs[length(xs) / 2]])
)

module.exports = median
