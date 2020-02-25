'use strict'

const isStr = require('./isStr')
const fixtures = require('./type.fixtures')

describe('isStr()', () => {
  it('only returns true when given a string', () => {
    const match = fixtures.str
    const nomatch = [].concat(
      fixtures.undef,
      fixtures.nil,
      fixtures.bool,
      fixtures.int,
      fixtures.num,
      fixtures.nan,
      fixtures.inf,
      fixtures.arr,
      fixtures.obj,
      fixtures.pojo,
      fixtures.re,
      fixtures.sym,
      fixtures.fun
    )

    match.forEach(([s, val]) => {
      if (!isStr(val)) throw new Error(`should match: ${s}`)
    })
    nomatch.forEach(([s, val]) => {
      if (isStr(val)) throw new Error(`should not match: ${s}`)
    })
  })

  xit('is curried', () => {})
})
