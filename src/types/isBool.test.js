'use strict'

const isBool = require('./isBool')
const fixtures = require('./type.fixtures')

describe('isBool()', () => {
  it('only returns true when given a boolean', () => {
    const match = fixtures.bool
    const nomatch = [].concat(
      fixtures.undef,
      fixtures.nil,
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
      if (!isBool(val)) throw new Error(`should match: ${s}`)
    })
    nomatch.forEach(([s, val]) => {
      if (isBool(val)) throw new Error(`should not match: ${s}`)
    })
  })

  xit('is curried', () => {})
})
