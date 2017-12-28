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
