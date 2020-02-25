'use strict'

const curry = require('../curry/curry')
const map = require('../array-higher-order/map')
const add = require('../math/add')

const range = curry((from, to) => map(add(from), [...Array(to - from).keys()]))

module.exports = range
