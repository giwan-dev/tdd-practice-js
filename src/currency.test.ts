import { Dollar } from './currency';

test('달러 곱셈 테스트', () => {
  const five = new Dollar(5);
  expect(five.times(2)).toBe(10);
});

test('달러 동일 확인', () => {
  expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
  expect(new Dollar(5).equals(new Dollar(6))).toBe(false)
});
