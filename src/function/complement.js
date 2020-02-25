'use strict'

const curry = require('../curry/curry')
const not = require('../logic/not')
const compose = require('./compose')

const complement = curry(f => compose(not, f))

module.exports = complement
