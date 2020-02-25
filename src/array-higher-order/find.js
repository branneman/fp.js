'use strict'

const curry = require('../curry/curry')

const find = curry((f, xs) => xs.find(f))

module.exports = find
