import { expect } from 'chai'
import monsterNames from '.'

describe('monster-names', () => {
  it('should have a list of all available names', () => {
    expect(monsterNames.all).to.satisfy(isArrayOfStrings)
  })

  it('should allow me to get a random name from the list', () => {
    expect(monsterNames.random()).to.satisfy(isIncludedIn(monsterNames.all))
  })
})

function isArrayOfStrings(array) {
  return array.every(i => typeof i === 'string')
}

function isIncludedIn(array) {
  return item => array.includes(item)
}
