import { Dollar } from './currency';

test('달러 곱셈 테스트', () => {
  const five = new Dollar(5);
  expect(five.times(2)).toBe(10);
});
