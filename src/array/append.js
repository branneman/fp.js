'use strict'

const curry = require('../curry/curry')

const append = curry((x, xs) => [...xs, x])

module.exports = append
