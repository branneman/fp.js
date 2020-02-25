'use strict'

const curry = require('../curry/curry')

const isFinite = curry(x => Number.isFinite(x))

module.exports = isFinite
