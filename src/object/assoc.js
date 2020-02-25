'use strict'

const curry = require('../curry/curry')

const assoc = curry((s, val, obj) => Object.assign({}, obj, { [s]: val }))

module.exports = assoc
