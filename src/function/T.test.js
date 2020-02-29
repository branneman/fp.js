'use strict'

const T = require('./T')

describe('T()', () => {
  it('returns true, ignoring arguments', () => {
    expect(T()).toEqual(true)
    expect(T(undefined)).toEqual(true)
    expect(T(null)).toEqual(true)
    expect(T(1)).toEqual(true)
    expect(T(42)).toEqual(true)
    expect(T({})).toEqual(true)
  })

  xit('is curried', () => {})
})
