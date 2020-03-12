'use strict'

const curryN = require('../curry/curryN')
const head = require('../array/head')
const tail = require('../array/tail')

const cond = curryN(2, (pairs, ...xs) => {
  if (!head(pairs)) return undefined
  const [pred, xf] = head(pairs)
  if (pred(...xs)) return xf(...xs)
  return cond(tail(pairs), ...xs)
})

module.exports = cond
