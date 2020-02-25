'use strict'

const curry = require('../curry/curry')

const reduceRight = curry((f, x, xs) => xs.reduceRight(f, x))

module.exports = reduceRight
