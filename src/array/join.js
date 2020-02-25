'use strict'

const curry = require('../curry/curry')

const join = curry((s, xs) => xs.join(s))

module.exports = join
