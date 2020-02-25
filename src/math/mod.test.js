'use strict'

const mod = require('./mod')

describe('mod()', () => {
  it('implements modulo operator', () => {
    expect(mod(-10, 3)).toBe(2)
    expect(mod(10, -3)).toBe(-2)
    expect(mod(-10, -3)).toBe(-1)
    expect(mod(10, 3)).toBe(1)
  })
  xit('is curried', () => {})
})
