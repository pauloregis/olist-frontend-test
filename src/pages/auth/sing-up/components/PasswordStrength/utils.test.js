import { expect } from 'chai'
import { getColor } from './utils'
import { grayLight3, redPastel, yellow, green } from 'utils/colors'

describe('getColor', () => {
  it('getColor should be a function', () => {
    expect(getColor).to.be.a('function')
  })

  it('getColor(0, 3, grayLight3) should return grayLight3', () => {
    expect(getColor(0, 3, grayLight3)).to.be.equal(grayLight3)
  })

  it('getColor(1, 3, grayLight3) should return redPastel', () => {
    expect(getColor(1, 3, grayLight3)).to.be.equal(redPastel)
  })

  it('getColor(2, 3, grayLight3) should return yellow', () => {
    expect(getColor(2, 3, grayLight3)).to.be.equal(yellow)
  })

  it('getColor(3, 3, grayLight3) should return green', () => {
    expect(getColor(3, 3, grayLight3)).to.be.equal(green)
  })
})

describe('getRuleColor', () => {
  it('getRuleColor should be a function', () => {
    expect(getRuleColor).to.be.a('function')
  })

  it('getRuleColor(true, true) should return green', () => {
    expect(getRuleColor(true, true)).to.be.equal(green)
  })

  it('getRuleColor(false, true) should return grayLight3', () => {
    expect(getRuleColor(false, true)).to.be.equal(grayLight3)
  })

  it('getRuleColor(false, false) should return grayLight3', () => {
    expect(getRuleColor(false, false)).to.be.equal(grayLight3)
  })

  it('getRuleColor(true, false) should return redPastel', () => {
    expect(getRuleColor(true, false)).to.be.equal(redPastel)
  })
})
