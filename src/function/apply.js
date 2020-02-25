'use strict'

const curry = require('../curry/curry')

const apply = curry((f, xs) => f.apply(null, xs))

module.exports = apply
