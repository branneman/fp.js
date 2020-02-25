'use strict'

const curry = require('../curry/curry')
const isObj = require('./isObj')

const isRegExp = curry(x => isObj(x) && x instanceof RegExp)

module.exports = isRegExp
