'use strict'

const reduce = require('../array-higher-order/reduce')
const includes = require('./includes')
const append = require('./append')

const distinct = reduce(
  (acc, x) => (!includes(x, acc) ? append(x, acc) : acc),
  []
)

module.exports = distinct
