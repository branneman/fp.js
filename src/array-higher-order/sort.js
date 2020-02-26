'use strict'

const curry = require('../curry/curry')
const filter = require('../array-higher-order/filter')
const nth = require('../array/nth')
const length = require('../array/length')
const concat = require('../array/concat')
const round = require('../math/round')
const compose = require('../function/compose')
const flip = require('../function/flip')

const sort = curry((f, xs) => {
  if (length(xs) < 2) return xs

  const pivot = nth(round(length(xs) / 2), xs)

  const fn = compose(
    flip(concat)(
      sort(
        f,
        filter(x => f(x, pivot) > 0, xs)
      )
    ),
    flip(concat)(filter(x => f(x, pivot) === 0, xs)),
    sort(f),
    filter(x => f(x, pivot) < 0)
  )
  return fn(xs)
})

module.exports = sort
