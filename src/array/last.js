'use strict'

const curry = require('../curry/curry')
const nth = require('./nth')
const length = require('./length')

const last = curry(xs => nth(length(xs) - 1, xs))

module.exports = last
