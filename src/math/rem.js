'use strict'

const curry = require('../curry/curry')
const trunc = require('./trunc')

const rem = curry((x, y) => x - y * trunc(x / y))

module.exports = rem
