'use strict'

const curry = require('../curry/curry')
const set = require('./set')
const view = require('./view')

const over = curry((lens, f, subj) => set(lens, f(view(lens, subj)), subj))

module.exports = over
