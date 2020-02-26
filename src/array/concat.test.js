'use strict'

const concat = require('./concat')

describe('concat()', () => {
  it('combines the elements of two lists', () => {
    const xs = [1]
    const ys = [2, 3, 4]

    const result = concat(xs, ys)

    expect(result).toEqual([1, 2, 3, 4])
  })

  it('handles empty lists', () => {
    expect(concat([], [])).toEqual([])
    expect(concat([42], [])).toEqual([42])
    expect(concat([], [1337])).toEqual([1337])
  })

  it('does not flatten', () => {
    const xs = [1, 2, [3, 4]]
    const ys = [[5], 6, 7]

    const result = concat(xs, ys)

    expect(result).toEqual([1, 2, [3, 4], [5], 6, 7])
  })

  it('is immutable', () => {
    const xs = [1, 2]
    const ys = [3, 4]

    concat(xs, ys)

    expect(xs).toEqual([1, 2])
    expect(ys).toEqual([3, 4])
  })

  xit('is curried', () => {})
})
