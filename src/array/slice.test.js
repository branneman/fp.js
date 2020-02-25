'use strict'

const slice = require('./slice')

describe('slice()', () => {
  xit('retrieves the proper sublist of a list', () => {})
  xit('handles array-like object', () => {})
  xit('can operate on strings', () => {})

  it('is immutable', () => {
    const xs = [1, 2, 3]

    const x = slice(0, 2, xs)

    expect(x).not.toBe(xs)
  })

  xit('is curried', () => {})
})
