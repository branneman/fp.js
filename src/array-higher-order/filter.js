'use strict'

const curry = require('../curry/curry')

const filter = curry((f, xs) => xs.filter(f))

module.exports = filter
