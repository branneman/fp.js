'use strict'

const curry = require('../curry/curry')
const isUndef = require('./isUndef')
const isNull = require('./isNull')
const isBool = require('./isBool')
const isFinite = require('./isFinite')
const isNaN = require('./isNaN')
const isNum = require('./isNum')
const isStr = require('./isStr')
const isArr = require('./isArr')
const isRegExp = require('./isRegExp')
const isSymbol = require('./isSymbol')
const isFunc = require('./isFunc')
const isObj = require('./isObj')

const type = curry(x => {
  if (isUndef(x)) return 'undefined'
  if (isNull(x)) return 'null'
  if (isBool(x)) return 'boolean'
  if (typeof x === 'number' && !isNaN(x) && !isFinite(x)) return 'infinity'
  if (isNaN(x)) return 'nan'
  if (isNum(x)) return 'number'
  if (isStr(x)) return 'string'
  if (isArr(x)) return 'array'
  if (isRegExp(x)) return 'regexp'
  if (isSymbol(x)) return 'symbol'
  if (isFunc(x)) return 'function'
  if (isObj(x)) return 'object'

  return 'unknown'
})

module.exports = type
