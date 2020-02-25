'use strict'

const curry = require('../curry/curry')

const includes = curry((f, xs) => xs.includes(f))

module.exports = includes
