'use strict'

const curry = require('../curry/curry')
const always = require('./always')

const tap = curry((f, x) => always(x)(f(x)))

module.exports = tap
