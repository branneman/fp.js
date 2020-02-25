'use strict'

const curry = require('../curry/curry')

const prop = curry((s, x) => x[s])

module.exports = prop
