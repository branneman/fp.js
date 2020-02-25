'use strict'

const curry = require('../curry/curry')
const floor = require('./floor')

const mod = curry((x, y) => x - y * floor(x / y))

module.exports = mod
