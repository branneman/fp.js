'use strict'

const curry = require('../curry/curry')

const map = curry((f, xs) => xs.map(f))

module.exports = map
