'use strict'

const reverse = require('./reverse')

describe('reverse()', () => {
  it('reverses lists', () => {
    const xs = [1, 3, 3, 7]

    const result = reverse(xs)

    expect(result).toEqual([7, 3, 3, 1])
  })

  it('reverses strings', () => {
    expect(reverse('')).toEqual('')
    expect(reverse('regal')).toEqual('lager')
  })

  it('is immutable', () => {
    const xs = [1, 2, 3]

    const x = reverse(xs)

    expect(x).not.toBe(xs)
    expect(xs).toEqual([1, 2, 3])
  })

  xit('is curried', () => {})
})
