'use strict'

const curry = require('../curry/curry')
const isFunc = require('../types/isFunc')
const flatten = require('../array/flatten')
const map = require('./map')

const chain = curry((f, m) => {
  if (isFunc(m['fantasy-land/chain'])) {
    return m['fantasy-land/chain'](f)
  }
  return flatten(map(f, m))
})

module.exports = chain
