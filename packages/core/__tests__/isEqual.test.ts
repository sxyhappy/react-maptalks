import { isEqual, compareObj } from "../src/utils/compareObj";

class TestA {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

}

class TestB extends TestA {
  constructor(width: number, height: number) {
    super(width, height);
  }
}

test('two not exist', () => {
  expect(isEqual(false, null)).toEqual(false)
})

test('tow is same type', () => {
  expect(isEqual(false, false)).toEqual(true)
})

test('two number', () => {
  expect(isEqual(1, 1)).toEqual(true)
})

test('two object', () => {
  expect(isEqual({a: 1, b: 2}, {a: 1, b: 2})).toEqual(true)
})

test('two object', () => {
  expect(isEqual({a: 1, b: 2}, {a: 2, b: 3})).toEqual(false)
})

test('two class', () => {
  expect(isEqual(new TestA(1, 2), new TestB(1, 2))).toEqual(true)
})

test('two class', () => {
  expect(isEqual(new TestA(1, 2), new TestB(3, 4))).toEqual(false)
})

test('change key', () => {
  expect(compareObj({a: 1, b: 2}, {a: 1, b: 3, c: 3})).toStrictEqual(['b', 'c'])
})

test('change key', () => {
  expect(compareObj({a: 1, b: 2}, {a: 1, b: 2})).toStrictEqual([])
})

