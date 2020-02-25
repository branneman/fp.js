'use strict'

const curry = require('../curry/curry')
const isArr = require('./isArr')
const isFunc = require('./isFunc')
const isSymbol = require('./isSymbol')
const isRegExp = require('./isRegExp')

const isObj = curry(
  x =>
    x === Object(x) && !isArr(x) && !isFunc(x) && !isSymbol(x) && !isRegExp(x)
)

module.exports = isObj
