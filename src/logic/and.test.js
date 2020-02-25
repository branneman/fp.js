'use strict'

const and = require('./and')

describe('and()', () => {
  it('behaves according to AND logic gate', () => {
    expect(and(0, 0)).toEqual(0)
    expect(and(0, 1)).toEqual(0)
    expect(and(1, 0)).toEqual(0)
    expect(and(1, 1)).toEqual(1)
  })

  xit('is curried', () => {})
})
