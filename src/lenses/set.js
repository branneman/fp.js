'use strict'

const curry = require('../curry/curry')

const set = curry((lens, val, subj) => lens.set(val, subj))

module.exports = set
