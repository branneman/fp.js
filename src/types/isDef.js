'use strict'

const curry = require('../curry/curry')
const isUndef = require('./isUndef')
const isNull = require('./isNull')
const isNaN = require('./isNaN')
const isFinite = require('./isFinite')

const isDef = curry(x => {
  if (typeof x === 'number') {
    return !isNaN(x) && isFinite(x)
  }
  return !isUndef(x) && !isNull(x)
})

module.exports = isDef
