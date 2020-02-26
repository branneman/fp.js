'use strict'

const slice = require('./slice')

describe('slice()', () => {
  it('extracts up to but not including', () => {
    const xs = [3.14, 42, 1337, 9001]

    const result = slice(1, 3, xs)

    expect(result).toEqual([42, 1337])
  })

  it('extracts one element', () => {
    const xs = [3.14, 42, 1337, 9001]

    const result = slice(0, 1, xs)

    expect(result).toEqual([3.14])
  })

  it('extracts starting at zero', () => {
    const xs = [3.14, 42, 1337, 9001]

    const result = slice(0, 2, xs)

    expect(result).toEqual([3.14, 42])
  })

  it('accepts equal from-to arguments', () => {
    const xs = [3.14, 42, 1337, 9001]

    const result = slice(3, 3, xs)

    expect(result).toEqual([])
  })

  it('accepts equal from < to', () => {
    const xs = [3.14, 42, 1337, 9001]

    const result = slice(3, 2, xs)

    expect(result).toEqual([])
  })

  it("accepts Infinity as 'to'", () => {
    const xs = [3.14, 42, 1337, 9001]

    const result = slice(1, Infinity, xs)

    expect(result).toEqual([42, 1337, 9001])
  })

  it("accepts negative 'to'", () => {
    const xs = [3.14, 42, 1337, 9001]

    const result = slice(1, -1, xs)

    expect(result).toEqual([42, 1337])
  })

  it("doesn't overflow", () => {
    const xs = [3.14, 42, 1337, 9001]

    const result = slice(2, 10, xs)

    expect(result).toEqual([1337, 9001])
  })

  it('is immutable', () => {
    const xs = [1, 2, 3]

    const x = slice(0, 2, xs)

    expect(x).not.toBe(xs)
  })

  xit('is curried', () => {})
})
