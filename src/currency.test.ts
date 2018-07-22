import { Dollar } from './dollar';
import { Franc } from './franc';

test('달러 곱셈 테스트', () => {
  const five = new Dollar(5);
  expect(five.times(2)).toBe(10);
});

test('동일 확인', () => {
  expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
  expect(new Dollar(5).equals(new Dollar(6))).toBe(false);
  expect(new Franc(5).equals(new Franc(5))).toBe(true);
  expect(new Franc(5).equals(new Franc(6))).toBe(false);
  expect(new Dollar(5).equals(new Franc(5))).toBe(false);
  expect(new Franc(5).equals(new Dollar(5))).toBe(false);
});

test('프랑 곱셈 테스트', () => {
  const five = new Franc(5);
  expect(five.times(2)).toBe(10);
});
