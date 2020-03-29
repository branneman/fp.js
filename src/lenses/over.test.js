'use strict'

const over = require('./over')
const lens = require('./lens')
const add = require('../math/add')
const prop = require('../object/prop')
const assoc = require('../object/assoc')

describe('over()', () => {
  it('is immutable', () => {
    const o = { x: 1, amount: 10 }

    const amountLens = lens(prop('amount'), assoc('amount'))
    over(amountLens, add(5), o)

    expect(o).toEqual({ x: 1, amount: 10 })
  })

  xit('is curried', () => {})
})
