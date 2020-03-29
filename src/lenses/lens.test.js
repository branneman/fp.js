'use strict'

const lens = require('./lens')
const lensIndex = require('./lensIndex')
const lensProp = require('./lensProp')
const view = require('./view')
const set = require('./set')
const over = require('./over')
const upper = require('../string/upper')
const assoc = require('../object/assoc')
const prop = require('../object/prop')
const compose = require('../function/compose')

describe('lens()', () => {
  it('returns a lens for give getter and setter functions', () => {
    const f = jest.fn()
    const g = jest.fn()
    const result = lens(f, g)

    expect(result.get).toEqual(f)
    expect(result.set).toEqual(g)
  })

  it('can be used with view, set, over', () => {
    const negate = x => -x
    const xLens = lens(prop('x'), assoc('x'))

    expect(view(xLens, { x: 1, y: 2 })).toEqual(1)
    expect(set(xLens, 4, { x: 1, y: 2 })).toEqual({ x: 4, y: 2 })
    expect(over(xLens, negate, { x: 1, y: 2 })).toEqual({ x: -1, y: 2 })
  })

  xit('is curried', () => {})
})

describe('view(), set(), over()', () => {
  const alice = {
    name: 'Alice Jones',
    address: ['22 Walnut St', 'San Francisco', 'CA'],
    pets: { dog: 'joker', cat: 'batman' }
  }

  const nameLens = lens(prop('name'), assoc('name'))
  const addressLens = lensProp('address')
  const headLens = lensIndex(0)

  it('may be applied to a lens created by `lensIndex`', () => {
    expect(view(headLens, alice.address)).toEqual('22 Walnut St')

    expect(set(headLens, '52 Crane Ave', alice.address)).toEqual([
      '52 Crane Ave',
      'San Francisco',
      'CA'
    ])

    expect(over(headLens, upper, alice.address)).toEqual([
      '22 WALNUT ST',
      'San Francisco',
      'CA'
    ])
  })

  it('may be applied to a lens created by `lensProp`', () => {
    expect(view(nameLens, alice)).toEqual('Alice Jones')

    expect(set(nameLens, 'Alice Smith', alice)).toEqual({
      name: 'Alice Smith',
      address: ['22 Walnut St', 'San Francisco', 'CA'],
      pets: { dog: 'joker', cat: 'batman' }
    })

    expect(over(nameLens, upper, alice)).toEqual({
      name: 'ALICE JONES',
      address: ['22 Walnut St', 'San Francisco', 'CA'],
      pets: { dog: 'joker', cat: 'batman' }
    })
  })

  xit('may be applied to composed lenses', () => {
    const streetLens = compose(addressLens, headLens)

    expect(view(streetLens, alice)).toEqual('22 Walnut St')

    expect(set(streetLens, '52 Crane Ave', alice)).toEqual({
      name: 'Alice Jones',
      address: ['52 Crane Ave', 'San Francisco', 'CA'],
      pets: { dog: 'joker', cat: 'batman' }
    })

    expect(over(streetLens, upper, alice)).toEqual({
      name: 'Alice Jones',
      address: ['22 WALNUT ST', 'San Francisco', 'CA'],
      pets: { dog: 'joker', cat: 'batman' }
    })
  })
})
