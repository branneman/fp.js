'use strict'

const compose = require('./compose')

describe('compose()', () => {
  it('performs right-to-left function composition', () => {
    const f = x => x + 'f'
    const g = x => x + 'g'
    const h = x => x + 'h'

    const fn = compose(f, g, h)
    const result = fn('')

    expect(result).toEqual('hgf')
  })

  it('creates a variadic function', () => {
    const f = x => x * 3
    const g = (x, y) => x + y

    const h = compose(f, g)
    const result = h(5, 5)

    expect(result).toEqual(30)
  })

  it('throws if given no arguments', () => {
    expect(compose).toThrowError(/argument/)
  })

  it('can be applied to one argument', () => {
    const f = x => x + 'f'

    const g = compose(f)

    expect(g('g')).toEqual('gf')
  })

  xit('is curried', () => {})
})
