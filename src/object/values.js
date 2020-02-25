'use strict'

const curry = require('../curry/curry')

const values = curry(x => Object.values(x))

module.exports = values
