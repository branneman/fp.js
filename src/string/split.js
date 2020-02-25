'use strict'

const curry = require('../curry/curry')

const split = curry((x, y) => y.split(x))

module.exports = split
