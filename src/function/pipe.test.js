'use strict'

const pipe = require('./pipe')

describe('pipe()', () => {
  it('performs left-to-right function composition', () => {
    const f = x => x + 'f'
    const g = x => x + 'g'
    const h = x => x + 'h'

    const fn = pipe(f, g, h)
    const result = fn('')

    expect(result).toEqual('fgh')
  })

  it('creates a variadic function', () => {
    const f = (x, y) => x + y
    const g = x => x * 3

    const h = pipe(f, g)
    const result = h(5, 5)

    expect(result).toEqual(30)
  })

  it('throws if given no arguments', () => {
    expect(pipe).toThrowError(/argument/)
  })

  it('can be applied to one argument', () => {
    const f = x => x + 'f'

    const g = pipe(f)

    expect(g('g')).toEqual('gf')
  })

  xit('is curried', () => {})
})
