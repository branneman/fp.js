'use strict'

const curry = require('../curry/curry')

const lt = curry((x, y) => x < y)

module.exports = lt
