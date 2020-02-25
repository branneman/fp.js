'use strict'

const curry = require('../curry/curry')

const lens = curry((get, set) => ({ get, set }))

module.exports = lens
