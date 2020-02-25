'use strict'

const curry = require('../curry/curry')
const lens = require('./lens')
const prop = require('../object/prop')
const assoc = require('../object/assoc')

const lensProp = curry(s => lens(prop(s), assoc(s)))

module.exports = lensProp
