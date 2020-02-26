'use strict'

const curryN = require('../curry/curryN')
const curry = require('../curry/curry')

const flip = curry(f => curryN(2, (x, y, ...xs) => f(y, x, ...xs)))

module.exports = flip
