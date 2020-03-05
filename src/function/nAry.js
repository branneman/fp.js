'use strict'

const curry = require('../curry/curry')
const curryN = require('../curry/curryN')
const slice = require('../array/slice')

const nAry = curry((i, f) => {
  return curryN(i, (...xs) => f(...slice(0, i, xs)))
})

module.exports = nAry
