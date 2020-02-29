'use strict'

const F = require('./F')

describe('F()', () => {
  it('returns false, ignoring arguments', () => {
    expect(F()).toEqual(false)
    expect(F(undefined)).toEqual(false)
    expect(F(null)).toEqual(false)
    expect(F(1)).toEqual(false)
    expect(F(42)).toEqual(false)
    expect(F({})).toEqual(false)
  })

  xit('is curried', () => {})
})
