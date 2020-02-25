'use strict'

const curry = require('../curry/curry')
const isUndef = require('../types/isUndef')
const isNull = require('../types/isNull')

const defaultTo = curry((x, y) => (isUndef(y) || isNull(y) ? x : y))

module.exports = defaultTo
