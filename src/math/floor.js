'use strict'

const curry = require('../curry/curry')

const floor = curry(x => Math.floor(x))

module.exports = floor
