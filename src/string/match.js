'use strict'

const curry = require('../curry/curry')

const match = curry((re, s) => s.match(re) || [])

module.exports = match
