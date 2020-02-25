'use strict'

const init = require('./init')

describe('init()', () => {
  xit('returns all but the last element', () => {})

  it('is immutable', () => {
    const xs = [1, 2, 3]

    const x = init(xs)

    expect(x).not.toBe(xs)
    expect(xs).toEqual([1, 2, 3])
  })

  xit('is curried', () => {})
})
