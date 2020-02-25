'use strict'

const ceil = require('./ceil')

describe('ceil()', () => {
  it('always rounds a number up to the next largest whole number or integer', () => {
    expect(ceil(0.95)).toBe(1)
    expect(ceil(4)).toBe(4)
    expect(ceil(7.004)).toBe(8)
    expect(ceil(-7.004)).toBe(-7)
  })
  xit('is curried', () => {})
})
