'use strict'

const map = require('./map')
const identity = require('../function/identity')

describe('map()', () => {
  it('maps functions over arrays', () => {
    const f = jest.fn(a => a.toUpperCase())
    const xs = ['foo', 'bar']

    const result = map(f, xs)

    expect(result).toEqual(['FOO', 'BAR'])
  })

  it('maps a list from left to right', () => {
    const f = jest.fn(a => a + 10)
    const xs = [1, 2, 3, 4]

    const result = map(f, xs)

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

    const result = map(f, xs)

    expect(result).toEqual([])
  })

  it('composes', function() {
    var mdouble = map(x => x * 2)
    var mdec = map(x => x - 1)

    const result = mdec(mdouble([10, 20, 30]))

    expect(result).toEqual([19, 39, 59])
  })

  it('dispatches to fantasy-land/map method', () => {
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

    const f = x => x + 1
    const m = Identity.of(6)

    const resultM = map(f, m)
    const result = resultM['fantasy-land/chain'](identity)

    expect(result).toEqual(7)
  })

  xit('is curried', () => {})

  it('is immutable', () => {
    const xs = [1, 2, 3]

    const f = x => x
    const x = map(f, xs)

    expect(x).not.toBe(xs)
  })
})
