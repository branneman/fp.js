'use strict'

const update = require('./update')

describe('update()', () => {
  it('updates the value at the given index of the supplied list', () => {
    const xs = [1, 2, 3, 7]

    const result = update(1, 3, xs)

    expect(result).toEqual([1, 3, 3, 7])
  })

  it('is immutable', () => {
    const xs = [1, 2, 3]

    update(1, 4, xs)

    expect(xs).toEqual([1, 2, 3])
  })

  xit('is curried', () => {})
})
