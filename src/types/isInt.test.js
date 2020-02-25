'use strict'

const isInt = require('./isInt')
const fixtures = require('./type.fixtures')

describe('isInt()', () => {
  it('only returns true when given an integer', () => {
    const match = [].concat(fixtures.int)
    const nomatch = [].concat(
      fixtures.undef,
      fixtures.nil,
      fixtures.bool,
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
      if (!isInt(val)) throw new Error(`should match: ${s}`)
    })
    nomatch.forEach(([s, val]) => {
      if (isInt(val)) throw new Error(`should not match: ${s}`)
    })
  })

  xit('is curried', () => {})
})
