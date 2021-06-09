import { capitalOrLowerLetter } from "../src";

test('capital string', () => {
  expect(capitalOrLowerLetter('center')).toEqual('Center')
})

test('lower string', () => {
  expect(capitalOrLowerLetter('Center', 'lower')).toEqual('center')
})
