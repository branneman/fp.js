'use strict'

const curry = require('../curry/curry')

const keys = curry(x => Object.keys(x))

module.exports = keys
