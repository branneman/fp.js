'use strict'

const isUndef = require('./isUndef')
const fixtures = require('./type.fixtures')

describe('isUndef()', () => {
  it('only returns true when given undefined', () => {
    const match = fixtures.undef
    const nomatch = [].concat(
      fixtures.nil,
      fixtures.bool,
      fixtures.int,
      fixtures.num,
      fixtures.nan,
      fixtures.inf,
      fixtures.str,
      fixtures.arr,
      fixtures.obj,
      fixtures.pojo,
      fixtures.re,
      fixtures.sym,
      fixtures.fun
    )

    match.forEach(([s, val]) => {
      if (!isUndef(val)) throw new Error(`should match: ${s}`)
    })
    nomatch.forEach(([s, val]) => {
      if (isUndef(val)) throw new Error(`should not match: ${s}`)
    })
  })

  xit('is curried', () => {})
})
