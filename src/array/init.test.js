'use strict'

const init = require('./init')

describe('init()', () => {
  it('returns all but the last element', () => {
    const xs = [1, 3, 3, 7]

    const result = init(xs)

    expect(result).toEqual([1, 3, 3])
  })

  it('is immutable', () => {
    const xs = [1, 2, 3]

    const x = init(xs)

    expect(x).not.toBe(xs)
    expect(xs).toEqual([1, 2, 3])
  })

  xit('is curried', () => {})
})
