'use strict'

const cond = require('./cond')

describe('cond()', () => {
  const F = () => false
  const T = () => true
  const eq = x => y => x === y

  it('returns transformer result for matching predicate', () => {
    const pairs = [
      [eq(0), () => 'water freezes at 0°C'],
      [eq(100), () => 'water boils at 100°C'],
      [T, temp => `nothing special happens at ${temp}°C`]
    ]

    expect(cond(pairs, 0)).toEqual('water freezes at 0°C')
    expect(cond(pairs, 50)).toEqual('nothing special happens at 50°C')
    expect(cond(pairs, 100)).toEqual('water boils at 100°C')
  })

  it('predicates are tested in order', () => {
    let orderOfCalls = ''
    const f = jest.fn(() => {
      orderOfCalls += 'f'
      return false
    })
    const g = jest.fn(() => {
      orderOfCalls += 'g'
      return false
    })
    const h = jest.fn(() => {
      orderOfCalls += 'h'
      return true
    })

    cond(
      [
        [f, () => 'foo'],
        [g, () => 'bar'],
        [h, () => 'baz']
      ],
      'foo'
    )

    expect(f).toHaveBeenCalled()
    expect(g).toHaveBeenCalled()
    expect(h).toHaveBeenCalled()
    expect(orderOfCalls).toEqual('fgh')
  })

  it('calls transformer matching the predicate', () => {
    const f = jest.fn(() => 'foo')
    const g = jest.fn(() => 'bar')
    const h = jest.fn(() => 'baz')

    cond(
      [
        [F, f],
        [T, g],
        [T, h]
      ],
      'foo'
    )

    expect(f).not.toHaveBeenCalled()
    expect(g).toHaveBeenCalled()
    expect(h).not.toHaveBeenCalled()
  })

  it('returns undefined if given no pairs', () => {
    expect(cond([], null)).toEqual(undefined)
    expect(cond([], 0)).toEqual(undefined)
    expect(cond([], {})).toEqual(undefined)
  })

  it('returns undefined if none of the predicates matches', () => {
    const pairs = [
      [eq(0), () => 'a'],
      [eq(50), () => 'b'],
      [eq(100), () => 'c']
    ]

    expect(cond(pairs, 20)).toEqual(undefined)
  })

  it('forwards all arguments to predicates', () => {
    const f = jest.fn(() => false)
    const g = jest.fn(() => false)
    const h = jest.fn(() => false)

    const pairs = [
      [f, () => 'a'],
      [g, () => 'b'],
      [h, () => 'c']
    ]

    const x = 42
    const y = [13, 37]
    const z = { foo: 'bar' }
    cond(pairs, x, y, z)

    expect(f).toHaveBeenCalledWith(x, y, z)
    expect(g).toHaveBeenCalledWith(x, y, z)
    expect(h).toHaveBeenCalledWith(x, y, z)
  })

  it('forwards all arguments to transformers', () => {
    const f = jest.fn(() => false)
    const g = jest.fn(() => false)
    const h = jest.fn(() => false)

    const x = 42
    const y = [13, 37]
    const z = { foo: 'bar' }

    cond(
      [
        [T, f],
        [F, g],
        [F, h]
      ],
      x,
      y,
      z
    )
    expect(f).toHaveBeenCalledWith(x, y, z)

    cond(
      [
        [F, f],
        [T, g],
        [F, h]
      ],
      x,
      y,
      z
    )
    expect(g).toHaveBeenCalledWith(x, y, z)

    cond(
      [
        [F, f],
        [F, g],
        [T, h]
      ],
      x,
      y,
      z
    )
    expect(h).toHaveBeenCalledWith(x, y, z)
  })

  xit('is curried', () => {})
})
