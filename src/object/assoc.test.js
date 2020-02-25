'use strict'

const assoc = require('./assoc')

describe('assoc()', () => {
  xit('sets the specified property', () => {})
  xit('overrides only the specified property', () => {})

  it('is immutable', () => {
    const o = { x: 42, name: 'Answer' }

    const x = assoc('x', o.x + 1337, o)

    expect(x).not.toBe(o)
    expect(o).toEqual({ x: 42, name: 'Answer' })
  })

  xit('is curried', () => {})
})
