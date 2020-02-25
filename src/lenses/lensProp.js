'use strict'

const lens = require('./lens')
const prop = require('../object/prop')
const assoc = require('../object/assoc')

const lensProp = s => lens(prop(s), assoc(s))

module.exports = lensProp
