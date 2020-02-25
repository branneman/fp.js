'use strict'

const length = require('../array/length')
const sum = require('./sum')

const mean = xs => sum(xs) / length(xs)

module.exports = mean
