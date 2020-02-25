'use strict'

const reduce = require('../array-higher-order/reduce')
const concat = require('./concat')

const flatten = reduce(concat, [])

module.exports = flatten
