'use strict'

const curry = require('../curry/curry')

const slice = curry((from, to, xs) => xs.slice(from, to))

module.exports = slice
