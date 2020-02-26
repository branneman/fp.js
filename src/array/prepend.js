'use strict'

const curry = require('../curry/curry')

const prepend = curry((x, xs) => [x, ...xs])

module.exports = prepend
