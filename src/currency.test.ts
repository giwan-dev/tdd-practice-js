import { Money } from './money';

test('곱셈 테스트', () => {
  const five = Money.dollar(5);
  expect(five.times(2)).toBe(10);
});

test('동일 확인', () => {
  const five = Money.dollar(5);

  expect(five.equals(Money.dollar(5))).toBe(true);
  expect(five.equals(Money.dollar(6))).toBe(false);
  expect(five.equals(Money.franc(5))).toBe(false);
});

test('통화 확인', () => {
  const five = Money.dollar(5);
  expect(five.currency).toBe('USD');
});

test('덧셈 테스트', () => {
  const five = Money.dollar(5);
  expect(five.plus(five)).toEqual(Money.dollar(10));
});
