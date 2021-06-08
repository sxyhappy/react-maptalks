import { capitalLetter } from "../src/utils/capitalLetter";

test('capital string', () => {
  expect(capitalLetter('center')).toEqual('Center')
})
