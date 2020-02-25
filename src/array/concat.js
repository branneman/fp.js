'use strict'

const curry = require('../curry/curry')

const concat = curry((x, y) => x.concat(y))

module.exports = concat
