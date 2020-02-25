'use strict'

const filter = require('./filter')

describe('filter()', () => {
  xit('reduces an array to those matching a filter', () => {})
  xit('returns an empty array if no element matches', () => {})
  xit('returns an empty array if given an empty array', () => {})
  xit('is curried', () => {})

  it('is immutable', () => {
    const xs = [1, 2, 3]

    const f = () => true
    const x = filter(f, xs)

    expect(x).not.toBe(xs)
  })
})
