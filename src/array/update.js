'use strict'

const curry = require('../curry/curry')
const slice = require('./slice')
const flatten = require('./flatten')

const update = curry((i, x, xs) =>
  flatten([slice(0, i, xs), x, slice(i + 1, Infinity, xs)])
)

module.exports = update
