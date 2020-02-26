'use strict'

const compose = require('../function/compose')
const flatten = require('../array/flatten')
const map = require('./map')

const chain = compose(flatten, map)

module.exports = chain
