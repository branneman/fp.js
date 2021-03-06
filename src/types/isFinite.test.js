'use strict'

const isFinite = require('./isFinite')
const fixtures = require('./type.fixtures')

describe('isFinite()', () => {
  it('only returns true when given a number', () => {
    const match = [].concat(fixtures.num)
    const nomatch = [].concat(
      fixtures.undef,
      fixtures.nil,
      fixtures.bool,
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
      if (!isFinite(val)) throw new Error(`should match: ${s}`)
    })
    nomatch.forEach(([s, val]) => {
      if (isFinite(val)) throw new Error(`should not match: ${s}`)
    })
  })

  xit('is curried', () => {})
})
