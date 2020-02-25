'use strict'

const length = require('../array/length')
const mean = require('./mean')

const median = xs =>
  length(xs) % 2
    ? xs[(length(xs) - 1) / 2]
    : mean([xs[length(xs) / 2 - 1], xs[length(xs) / 2]])

module.exports = median
