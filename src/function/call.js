'use strict'

const curryN = require('../curry/curryN')

const call = curryN(2, (f, ...xs) => f(...xs))

module.exports = call
