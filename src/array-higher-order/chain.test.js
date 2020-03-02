'use strict'

const chain = require('./chain')
const identity = require('../function/identity')

describe('chain()', () => {
  it('maps functions over arrays', () => {
    const f = jest.fn(a => a.toUpperCase())
    const xs = ['foo', 'bar']

    const result = chain(f, xs)

    expect(result).toEqual(['FOO', 'BAR'])
  })

  it('maps, then flattens', () => {
    const f = x => [x + 10]
    const xs = [1, 3, 3, 7]

    const result = chain(f, xs)

    expect(result).toEqual([11, 13, 13, 17])
  })

  it('does not flatten recursively', () => {
    const xs = [[1], [[2], 100], [], [3, [4]]]
    const f = xs => (xs[0] ? [xs[0]] : [])

    const result = chain(f, xs)

    expect(result).toEqual([1, [2], 3])
  })

  it('maps a list from left to right', () => {
    const f = jest.fn(a => a + 10)
    const xs = [1, 2, 3, 4]

    const result = chain(f, xs)

    expect(f.mock.calls.length).toEqual(4)
    expect(f.mock.calls[0]).toEqual([1])
    expect(f.mock.calls[1]).toEqual([2])
    expect(f.mock.calls[2]).toEqual([3])
    expect(f.mock.calls[3]).toEqual([4])
    expect(result).toEqual([11, 12, 13, 14])
  })

  it('returns an empty list when an empty is given', () => {
    const f = x => x
    const xs = []

    const result = chain(f, xs)

    expect(result).toEqual([])
  })

  it('composes', function() {
    const mdouble = chain(x => [x * 2])
    const mdec = chain(x => [x - 1])

    const result = mdec(mdouble([10, 20, 30]))

    expect(result).toEqual([19, 39, 59])
  })

  it('dispatches to fantasy-land/chain method', () => {
    class Identity {
      constructor(x) {
        this.x = x
      }
      static of(x) {
        return new Identity(x)
      }
      ['fantasy-land/map'](f) {
        return Identity.of(f(this.x))
      }
      ['fantasy-land/chain'](f) {
        return f(this.x)
      }
    }

    const f = x => Identity.of(x + 1)
    const m = Identity.of(6)

    const resultM = chain(f, m)
    const result = resultM['fantasy-land/chain'](identity)

    expect(result).toEqual(7)
  })

  xit('is curried', () => {})

  it('is immutable', () => {
    const xs = [1, 2, 3]

    const f = x => x
    const x = chain(f, xs)

    expect(x).not.toBe(xs)
  })
})
