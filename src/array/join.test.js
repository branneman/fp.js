'use strict'

const join = require('./join')

describe('join()', () => {
  it('returns a string of all elements, joined by a separator', () => {
    const xs = [1, 3, 3, 7]

    const result = join('', xs)

    expect(result).toEqual('1337')
  })

  it('does not add separator if given an empty list', () => {
    const xs = []

    const result = join('bar', xs)

    expect(result).toEqual('')
  })

  it('does not add separator if given an list of length 1', () => {
    const xs = ['foo']

    const result = join('bar', xs)

    expect(result).toEqual('foo')
  })

  xit('is curried', () => {})
})
