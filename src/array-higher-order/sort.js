'use strict'

const curry = require('../curry/curry')

const sort = curry((f, xs) => xs.slice().sort(f))

module.exports = sort
