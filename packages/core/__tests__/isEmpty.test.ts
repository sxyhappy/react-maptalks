import { isEmpty } from '../src';

test('value is undefined', () => {
  expect(isEmpty(undefined)).toEqual(true)
})

test('value is 0', () => {
  expect(isEmpty(0)).toEqual(false)
})

test('value is false', () => {
  expect(isEmpty(false)).toEqual(false)
})

test('empty array', () => {
  expect(isEmpty([])).toEqual(true)
})

test('array with value', () => {
  expect(isEmpty(['1', '2'])).toEqual(false)
})

test('empty object', () => {
  expect(isEmpty({})).toEqual(true)
})

test('object with value', () => {
  expect(isEmpty({a: 1})).toEqual(false)
})
