import { expect } from 'chai'
import { getCorrectRules } from './utils'

const rules = [
  'rule 1',
  'rule 2',
  'rule 3'
]

describe('getCorrectRules', () => {
  it('getCorrectRules should be a function', () => {
    expect(getCorrectRules).to.be.a('function')
  })

  it('getCorrectRules([rules[0]], true, rules) should return [rules[1], rules[2]]', () => {
    expect(getCorrectRules([rules[0]], true, rules)).to.be.deep.equal([rules[1], rules[2]])
  })

  it('getCorrectRules([rules[0], rules[1]], true, rules) should return [rules[2]]', () => {
    expect(getCorrectRules([rules[0], rules[1]], true, rules)).to.be.deep.equal([rules[2]])
  })

  it('getCorrectRules(undefined, true, rules) should return all rules', () => {
    expect(getCorrectRules(undefined, true, rules)).to.be.deep.equal(rules)
  })

  it('getCorrectRules(undefined, false, rules) should return []', () => {
    expect(getCorrectRules(undefined, false, rules)).to.be.deep.equal([])
  })
})
