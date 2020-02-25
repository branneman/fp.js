'use strict'

const reduce = require('../array-higher-order/reduce')
const add = require('./add')

const sum = reduce(add, 0)

module.exports = sum
