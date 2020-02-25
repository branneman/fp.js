'use strict'

const curry = require('../curry/curry')

const view = curry((lens, subj) => lens.get(subj))

module.exports = view
