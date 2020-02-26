'use strict'

const reduce = require('./reduce')

describe('reduce()', () => {
  it('folds functions over lists with the supplied accumulator', () => {
    const f = (a, b) => a + b
    const xs = [1, 2, 3, 4]

    const result = reduce(f, 0, xs)

    expect(result).toEqual(10)
  })

  it('folds a list from left to right', () => {
    const f = jest.fn((a, b) => a + b)
    const xs = [1, 2, 3, 4]

    const result = reduce(f, 0, xs)

    expect(f.mock.calls.length).toEqual(4)
    expect(f.mock.calls[0]).toEqual([0, 1])
    expect(f.mock.calls[1]).toEqual([1, 2])
    expect(f.mock.calls[2]).toEqual([3, 3])
    expect(f.mock.calls[3]).toEqual([6, 4])
    expect(result).toEqual(10)
  })

  it('returns the accumulator for an empty list', () => {
    const f = (a, b) => a + b
    const xs = []

    const result = reduce(f, 'foo', xs)

    expect(result).toEqual('foo')
  })

  it('does not call the supplied function for an empty list', () => {
    const f = jest.fn((a, b) => a + b)
    const xs = []

    reduce(f, 'bar', xs)

    expect(f).not.toHaveBeenCalled()
  })

  it('accepts a list of undefined', () => {
    const f = () => 1
    const xs = [undefined, undefined, undefined]
    const result = reduce(f, 0, xs)
    expect(result).toEqual(1)
  })

  it('accepts a list of null', () => {
    const f = () => 1
    const xs = [null, null, null]
    const result = reduce(f, 0, xs)
    expect(result).toEqual(1)
  })

  xit('is curried', () => {})
})
