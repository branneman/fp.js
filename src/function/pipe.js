'use strict'

const reverse = require('../array/reverse')
const compose = require('./compose')

const pipe = (...fns) => compose(...reverse(fns))

module.exports = pipe
