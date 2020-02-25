'use strict'

const rem = require('./rem')

describe('rem()', () => {
  it('implements remainder operator', () => {
    expect(rem(-10, 3)).toBe(-1)
    expect(rem(10, -3)).toBe(1)
    expect(rem(-10, -3)).toBe(-1)
    expect(rem(10, 3)).toBe(1)
  })
  xit('is curried', () => {})
})
