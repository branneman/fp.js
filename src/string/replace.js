'use strict'

const curry = require('../curry/curry')

const replace = curry((re, replacement, s) => s.replace(re, replacement))

module.exports = replace
