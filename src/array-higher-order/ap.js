'use strict'

const curry = require('../curry/curry')
const isFunc = require('../types/isFunc')
const reduce = require('./reduce')
const map = require('./map')
const concat = require('../array/concat')

const ap = curry((applyF, applyX) => {
  if (isFunc(applyX['fantasy-land/ap'])) {
    return applyX['fantasy-land/ap'](applyF)
  }
  if (isFunc(applyF['fantasy-land/ap'])) {
    return applyF['fantasy-land/ap'](applyX)
  }
  return reduce((acc, f) => concat(acc, map(f, applyX)), [], applyF)
})

module.exports = ap
