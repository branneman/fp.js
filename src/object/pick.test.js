'use strict'

const pick = require('./pick')

describe('pick()', () => {
  xit('copies the named properties of an object to the new object', () => {})
  xit('handles numbers as properties', () => {})
  xit('ignores properties not included', () => {})
  xit('retrieves prototype properties', () => {})

  it('is immutable', () => {
    const o = { x: 1, y: 2, z: 3 }

    const x = pick(['x', 'z'], o)

    expect(x).not.toBe(o)
    expect(o).toEqual({ x: 1, y: 2, z: 3 })
  })

  xit('is curried', () => {})
})
