'use strict'

const trunc = require('./trunc')

describe('trunc()', () => {
  it('returns the integer part of a number by removing any fractional', () => {
    expect(trunc(13.37)).toBe(13)
    expect(trunc(42.84)).toBe(42)
    expect(trunc(0.123)).toBe(0)
    expect(trunc(-0.123)).toBe(-0)
  })

  xit('is curried', () => {})
})
