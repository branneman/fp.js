'use strict'

const isArr = require('./isArr')
const isFunc = require('./isFunc')
const isSymbol = require('./isSymbol')

const isObj = x => x === Object(x) && !isArr(x) && !isFunc(x) && !isSymbol(x)

module.exports = isObj
