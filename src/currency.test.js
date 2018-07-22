import { Money } from './currency';

test('Test multiplication', () => {
  const five = Money.dollar(5);
  expect(five.times(2)).toEqual(Money.dollar(10));
  expect(five.times(3)).toEqual(Money.dollar(15));
});

test('Test franc multiplication', () => {
  const five = Money.franc(5);
  expect(five.times(2)).toEqual(Money.franc(10));
  expect(five.times(3)).toEqual(Money.franc(15));
});

test('Test equality', () => {
  expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true);
  expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false);
  expect(Money.franc(5).equals(Money.dollar(5))).toBe(false);
});

test('TestCurrency', () => {
  expect(Money.dollar(1).currency()).toBe('USD');
  expect(Money.franc(1).currency()).toBe('CHF');
});
