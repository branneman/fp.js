'use strict'

const curryN = require('./curryN')

const curry = f => curryN(f.length, f)

module.exports = curry
