'use strict'

const xor = require('./xor')

describe('xor()', () => {
  it('behaves according to XOR logic gate', () => {
    expect(xor(0, 0)).toEqual(0)
    expect(xor(0, 1)).toEqual(1)
    expect(xor(1, 0)).toEqual(1)
    expect(xor(1, 1)).toEqual(0)
  })

  xit('is curried', () => {})
})
