'use strict'

const set = require('./set')
const lens = require('./lens')
const assoc = require('../object/assoc')
const prop = require('../object/prop')

describe('set()', () => {
  it('is immutable', () => {
    const o = { x: 1, amount: 10 }

    const amountLens = lens(prop('amount'), assoc('amount'))
    set(amountLens, 20, o)

    expect(o).toEqual({ x: 1, amount: 10 })
  })

  xit('is curried', () => {})
})
