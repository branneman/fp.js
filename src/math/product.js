'use strict'

const reduce = require('../array-higher-order/reduce')
const multiply = require('./multiply')

const product = reduce(multiply, 1)

module.exports = product
