'use strict'

const curry = require('../curry/curry')
const lens = require('./lens')
const nth = require('../array/nth')
const update = require('../array/update')

const lensIndex = curry(i => lens(nth(i), update(i)))

module.exports = lensIndex
