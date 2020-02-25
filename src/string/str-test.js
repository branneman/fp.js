'use strict'

const curry = require('../curry/curry')

const test = curry((re, s) => re.test(s))

module.exports = test
