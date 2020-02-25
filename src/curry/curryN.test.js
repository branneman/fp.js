'use strict'

const curryN = require('./curryN')

describe('curryN()', () => {
  it('should correctly curry to given arity', () => {
    const threeArg = (_a, _b, c = 42) => c
    const fn = curryN(2, threeArg)

    const res1 = fn() //=> fn with arity of 2
    const res2 = fn(1) //=> fn with arity of 1
    const res3 = fn(1, 2) //=> run function
    const res4 = fn(1, 2, 3) //=> run function
    const res5 = fn(1, 2, 3, 4) //=> run function

    expect(typeof res1).toStrictEqual('function')
    expect(typeof res2).toStrictEqual('function')
    expect(res3).toStrictEqual(42)
    expect(res4).toStrictEqual(3)
    expect(res5).toStrictEqual(3)
  })
})
