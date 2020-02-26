'use strict'

const flatten = require('./flatten')

describe('flatten()', () => {
  it('turns a nested list into one flat list', () => {
    const xs = [1, 2, [3, 4], 5, [6, 7], [8, [9]]]

    const result = flatten(xs)

    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, [9]])
  })

  it('flattens a list of empty lists', () => {
    const xs = [[], [], [], []]

    const result = flatten(xs)

    expect(result).toEqual([])
  })

  it('is immutable', () => {
    const xs = [1, 2, 3]
    const x = flatten(xs)
    expect(x).not.toBe(xs)

    const ys = [1, [2, 3]]
    const y = flatten(ys)
    expect(y).not.toBe(ys)
  })

  xit('is curried', () => {})
})
