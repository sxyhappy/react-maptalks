import { getPropsEvent, isEqual } from "../src";

test('object hasn\'t event props', () => {
  expect(getPropsEvent({a: 1, b: 2})).toStrictEqual({});
})

test('object has event map', () => {
  expect(isEqual(getPropsEvent({onReady: () => console.log('ready'), a: 1}), {ready: () => console.log('ready')})).toEqual(true)
})
