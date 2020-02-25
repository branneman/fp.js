'use strict'

const not = require('../logic/not')
const compose = require('./compose')

const complement = f => compose(not, f)

module.exports = complement
