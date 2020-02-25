'use strict'

const isDef = require('./isDef')
const fixtures = require('./type.fixtures')

describe('isDef()', () => {
  it('only returns true when given undefined or null', () => {
    const match = [].concat(
      fixtures.bool,
      fixtures.int,
      fixtures.num,
      fixtures.str,
      fixtures.arr,
      fixtures.obj,
      fixtures.pojo,
      fixtures.re,
      fixtures.sym,
      fixtures.fun
    )
    const nomatch = [].concat(
      fixtures.undef,
      fixtures.nil,
      fixtures.nan,
      fixtures.inf
    )

    match.forEach(([s, val]) => {
      if (!isDef(val)) throw new Error(`should match: ${s}`)
    })
    nomatch.forEach(([s, val]) => {
      if (isDef(val)) throw new Error(`should not match: ${s}`)
    })
  })

  xit('is curried', () => {})
})
