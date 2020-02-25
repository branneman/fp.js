'use strict'

const curry = require('../curry/curry')

const update = curry((i, x, xs) => {
  const ys = xs.slice()
  ys[i] = x
  return ys
})

module.exports = update
