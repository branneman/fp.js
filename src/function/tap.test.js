'use strict'

const tap = require('./tap')

describe('tap()', () => {
  it('returns a function that always returns its argument', () => {
    const identity = x => x
    const x = { x: 42 }

    const result = tap(identity, x)

    expect(result).toBe(x)
  })

  it('takes a function that executes with second argument', () => {
    const f = jest.fn()
    const x = 42

    tap(f, x)

    expect(f).toHaveBeenCalled()
    expect(f).toHaveBeenCalledWith(x)
  })

  it('ignores return value', () => {
    const f = x => x + 10
    const x = 42

    const result = tap(f, x)

    expect(result).toEqual(42)
  })

  xit('is curried', () => {})
})
