'use strict'

const isObj = require('./isObj')

const isRegExp = x => isObj(x) && x instanceof RegExp

module.exports = isRegExp
