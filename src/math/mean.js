'use strict'

const curry = require('../curry/curry')

const length = require('../array/length')
const sum = require('./sum')

const mean = curry(xs => sum(xs) / length(xs))

module.exports = mean
