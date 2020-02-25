'use strict'

const isUndef = require('../type-checks/isUndef')
const isNull = require('../type-checks/isNull')

const defaultTo = x => y => (isUndef(y) || isNull(y) ? x : y)

module.exports = defaultTo
