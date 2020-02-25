'use strict'

const floor = require('./floor')

describe('floor()', () => {
  it('returns the largest integer less than or equal to a given number', () => {
    expect(floor(5.95)).toBe(5)
    expect(floor(5.05)).toBe(5)
    expect(floor(5)).toBe(5)
    expect(floor(-5.05)).toBe(-6)
  })
  xit('is curried', () => {})
})
