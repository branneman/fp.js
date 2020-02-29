'use strict'

const curry = require('../curry/curry')

const always = curry(a => () => a)

module.exports = always
