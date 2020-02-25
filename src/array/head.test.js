'use strict'

const head = require('./head')

describe('head()', () => {
  xit('returns the first element', () => {})
  xit('is curried', () => {})

  it('is immutable', () => {
    const xs = [1, 2, 3]

    head(xs)

    expect(xs).toEqual([1, 2, 3])
  })
})
