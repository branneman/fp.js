'use strict'

const curry = require('../curry/curry')

const nth = curry((i, xs) => xs[i])

module.exports = nth
