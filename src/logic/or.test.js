'use strict'

const or = require('./or')

describe('or()', () => {
  it('behaves according to OR logic gate', () => {
    expect(or(0, 0)).toEqual(0)
    expect(or(0, 1)).toEqual(1)
    expect(or(1, 0)).toEqual(1)
    expect(or(1, 1)).toEqual(1)
  })

  xit('is curried', () => {})
})
