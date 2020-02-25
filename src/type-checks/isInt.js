'use strict'

const isInt = x => typeof x === 'number' && isFinite(x) && Math.floor(x) === x

module.exports = isInt
