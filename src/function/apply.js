'use strict'

const curry = require('../curry/curry')

const apply = curry((f, xs) => f(...xs))

module.exports = apply
