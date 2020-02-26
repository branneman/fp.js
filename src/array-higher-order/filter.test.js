'use strict'

const filter = require('./filter')

describe('filter()', () => {
  it('reduces a list to those matching a filter', () => {
    const f = x => x % 2 === 0
    const xs = [0, 1, 2, 3, 4, 5, 6]

    const result = filter(f, xs)

    expect(result).toEqual([0, 2, 4, 6])
  })

  it('returns an empty list if no element matches', () => {
    const f = x => x > 10
    const xs = [0, 1, 2, 3, 4, 5, 6]

    const result = filter(f, xs)

    expect(result).toEqual([])
  })

  it('returns an empty list if given an empty list', () => {
    const f = x => x > 10
    const xs = []

    const result = filter(f, xs)

    expect(result).toEqual([])
  })

  it('iterates a list from left to right', () => {
    const f = jest.fn(_a => true)
    const xs = [1, 2, 3, 4]

    const result = filter(f, xs)

    expect(f.mock.calls.length).toEqual(4)
    expect(f.mock.calls[0]).toEqual([1])
    expect(f.mock.calls[1]).toEqual([2])
    expect(f.mock.calls[2]).toEqual([3])
    expect(f.mock.calls[3]).toEqual([4])
    expect(result).toEqual([1, 2, 3, 4])
  })

  xit('is curried', () => {})

  it('is immutable', () => {
    const xs = [1, 2, 3]

    const f = () => true
    const x = filter(f, xs)

    expect(x).not.toBe(xs)
  })
})
