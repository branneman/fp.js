'use strict'

const round = require('./round')

describe('round()', () => {
  it('returns the value of a number rounded to the nearest integer', () => {
    expect(round(0.9)).toBe(1)
    expect(round(5.59)).toBe(6)
    expect(round(5.5)).toBe(6)
    expect(round(5.05)).toBe(5)
    expect(round(-5.05)).toBe(-5)
    expect(round(-5.5)).toBe(-5)
    expect(round(-5.95)).toBe(-6)
  })
  xit('is curried', () => {})
})
