'use strict'

const reduceRight = require('./reduceRight')

describe('reduceRight()', () => {
  it('folds functions over lists with the supplied accumulator', () => {
    const f = (a, b) => a + b
    const xs = [1, 2, 3, 4]

    const result = reduceRight(f, 0, xs)

    expect(result).toEqual(10)
  })

  it('folds a list from right to left', () => {
    const f = jest.fn((a, b) => a + b)
    const xs = [1, 2, 3, 4]

    const result = reduceRight(f, 0, xs)

    expect(f.mock.calls.length).toEqual(4)
    expect(f.mock.calls[0]).toEqual([0, 4])
    expect(f.mock.calls[1]).toEqual([4, 3])
    expect(f.mock.calls[2]).toEqual([7, 2])
    expect(f.mock.calls[3]).toEqual([9, 1])
    expect(result).toEqual(10)
  })

  it('returns the accumulator for an empty list', () => {
    const f = (a, b) => a + b
    const xs = []

    const result = reduceRight(f, 'foo', xs)

    expect(result).toEqual('foo')
  })

  it('does not call the supplied function for an empty list', () => {
    const f = jest.fn((a, b) => a + b)
    const xs = []

    reduceRight(f, 'bar', xs)

    expect(f).not.toHaveBeenCalled()
  })

  it('accepts a list of undefined', () => {
    const f = () => 1
    const xs = [undefined, undefined, undefined]
    const result = reduceRight(f, 0, xs)
    expect(result).toEqual(1)
  })

  it('accepts a list of null', () => {
    const f = () => 1
    const xs = [null, null, null]
    const result = reduceRight(f, 0, xs)
    expect(result).toEqual(1)
  })

  xit('is curried', () => {})
})
