'use strict'

const curry = require('../curry/curry')
const isUndef = require('../type-checks/isUndef')
const isNull = require('../type-checks/isNull')

const defaultTo = curry((x, y) => (isUndef(y) || isNull(y) ? x : y))

module.exports = defaultTo
