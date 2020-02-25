'use strict'

const lens = require('./lens')
const nth = require('../array/nth')
const update = require('../array/update')

const lensIndex = i => lens(nth(i), update(i))

module.exports = lensIndex
