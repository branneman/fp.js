'use strict'

const head = require('./head')

describe('head()', () => {
  it('returns the first element', () => {
    const xs = [42, 1337]

    const result = head(xs)

    expect(result).toEqual(42)
  })

  xit('is curried', () => {})

  it('is immutable', () => {
    const xs = [1, 2, 3]

    head(xs)

    expect(xs).toEqual([1, 2, 3])
  })
})
