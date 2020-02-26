'use strict'

const sort = require('./sort')

describe('sort()', () => {
  it('sorts the elements of a list', () => {
    const f = (a, b) => a - b
    const xs = [11.8, 14.1, 21.3, 8.5, 16.7, 5.7]

    const result = sort(f, xs)

    expect(result).toEqual([5.7, 8.5, 11.8, 14.1, 16.7, 21.3])
  })

  it('works with comparison function returning -1, 0, 1', () => {
    const f = (a, b) => {
      if (a > b) return 1
      if (a < b) return -1
      return 0
    }
    const xs = ['Edward', 'Sharpe', 'And', 'The', 'Magnetic', 'Zeros']

    const result = sort(f, xs)

    expect(result).toEqual([
      'And',
      'Edward',
      'Magnetic',
      'Sharpe',
      'The',
      'Zeros'
    ])
  })

  it('uses the supplied comparison function', () => {
    const f = (a, b) => a.value - b.value
    const xs = [
      { name: 'Edward', value: 21 },
      { name: 'Sharpe', value: 37 },
      { name: 'And', value: 45 },
      { name: 'The', value: -12 },
      { name: 'Magnetic', value: 13 },
      { name: 'Zeros', value: 37 }
    ]

    const result = sort(f, xs)

    expect(result).toEqual([
      { name: 'The', value: -12 },
      { name: 'Magnetic', value: 13 },
      { name: 'Edward', value: 21 },
      { name: 'Sharpe', value: 37 },
      { name: 'Zeros', value: 37 },
      { name: 'And', value: 45 }
    ])
  })

  it('accepts standard comparison functions', () => {
    const f = (a, b) => a.localeCompare(b)
    const xs = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair']

    const result = sort(f, xs)

    expect(result).toEqual([
      'adieu',
      'café',
      'communiqué',
      'éclair',
      'premier',
      'réservé'
    ])
  })

  it('returns an empty list if given an empty list', () => {
    const f = jest.fn(() => 0)
    const xs = []

    const result = sort(f, xs)

    expect(result).toEqual([])
    expect(f).not.toHaveBeenCalled()
  })

  it('is immutable', () => {
    const xs = [1, 2, 3]

    const f = (a, b) => a - b
    const x = sort(f, xs)

    expect(x).not.toBe(xs)
  })

  xit('is curried', () => {})
})
