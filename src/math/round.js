'use strict'

const curry = require('../curry/curry')

const round = curry(x => Math.round(x))

module.exports = round
