'use strict'

const curry = require('../curry/curry')

const add = curry((x, y) => Number(x) + Number(y))

module.exports = add
