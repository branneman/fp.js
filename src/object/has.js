'use strict'

const curry = require('../curry/curry')

const has = curry((s, obj) => Object.prototype.hasOwnProperty.call(obj, s))

module.exports = has
