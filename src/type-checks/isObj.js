'use strict'

const curry = require('../curry/curry')
const isArr = require('./isArr')
const isFunc = require('./isFunc')
const isSymbol = require('./isSymbol')

const isObj = curry(
  x => x === Object(x) && !isArr(x) && !isFunc(x) && !isSymbol(x)
)

module.exports = isObj
