'use strict'

const isSymbol = require('./isSymbol')
const fixtures = require('./type.fixtures')

describe('isSymbol()', () => {
  it('only returns true when given an object', () => {
    const match = [].concat(fixtures.sym)
    const nomatch = [].concat(
      fixtures.undef,
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
      fixtures.fun
    )

    match.forEach(([s, val]) => {
      if (!isSymbol(val)) throw new Error(`should match: ${s}`)
    })
    nomatch.forEach(([s, val]) => {
      if (isSymbol(val)) throw new Error(`should not match: ${s}`)
    })
  })

  xit('is curried', () => {})
})
