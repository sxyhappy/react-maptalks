import { omit } from "../src/utils/omit";

test('omit keys 为空', () => {
  expect(omit({a: 1, b: 2})).toStrictEqual({a: 1, b: 2})
})

test('omit keys 为空数组', () => {
  expect(omit({a: 1, b: 2}, [])).toStrictEqual({a: 1, b: 2})
})

test('omit keys 为字符串', () => {
  expect(omit({a: 1, b: 2}, 'a')).toStrictEqual({b: 2})
})

test('omit keys 为数组', () => {
  expect(omit({a: 1, b: 2, c: 3}, ['a', 'b'])).toStrictEqual({c: 3})
})
