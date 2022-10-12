import {
  it,
  expect,
  describe,
} from 'vitest'

describe('group test description', () => {
  describe('component/module test description - A', () => {
    it('feature/fixture test description', () => {
      expect(true).toBeTruthy()
    })
  })

  describe('component/module test description - B', () => {
    it('feature/fixture test description', () => {
      expect(true).toBeTruthy()
    })
  })
})