import { pick } from '../src';

test('pick string form object', () => {
  expect(pick({a: 1, b: 2}, 'a')).toStrictEqual({a: 1})
})

test('pick array string form object', () => {
  expect(pick({a: 1, b: 2, c: 3}, ['a', 'b'])).toStrictEqual({a: 1, b: 2})
})

test('pick not exist string key form object', () => {
  expect(pick({a: 1}, ['b'])).toStrictEqual({})
})

test('pick not exist array string key form object', () => {
  expect(pick({a: 1, b: 2, c: 3}, ['b', 'd'])).toStrictEqual({b: 2})
})
