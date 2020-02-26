'use strict'

const reduce = require('../array-higher-order/reduce')
const concat = require('./concat')
const isArr = require('../types/isArr')

const flatten = reduce((acc, x) => concat(acc, isArr(x) ? x : [x]), [])

module.exports = flatten
