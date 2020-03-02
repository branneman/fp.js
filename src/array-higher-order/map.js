'use strict'

const curry = require('../curry/curry')
const isFunc = require('../types/isFunc')
const reduce = require('./reduce')
const append = require('../array/append')

const map = curry((f, m) => {
  if (isFunc(m['fantasy-land/map'])) {
    return m['fantasy-land/map'](f)
  }
  return reduce((acc, x) => append(f(x), acc), [], m)
})

module.exports = map
