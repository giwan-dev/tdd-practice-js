import { Money, Bank, Sum } from './currency';

test('Test simple addition', () => {
  const five = Money.dollar(5);
  const sum = five.plus(five);
  const bank = new Bank();
  const reduced = bank.reduce(sum, 'USD');
  expect(reduced).toEqual(Money.dollar(10));
});

test('Test reduce sum', () => {
  const sum = new Sum(Money.dollar(3), Money.dollar(4));
  const bank = new Bank();
  const result = bank.reduce(sum, 'USD');
  expect(result).toEqual(Money.dollar(7));
})

test('Test plus returns sum', () => {
  const five = Money.dollar(5);
  const sum = five.plus(five);
  expect(five).toEqual(sum.augend);
  expect(five).toEqual(sum.addend);
});

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

test('Test currency', () => {
  expect(Money.dollar(1).currency()).toBe('USD');
  expect(Money.franc(1).currency()).toBe('CHF');
});

test('Test reduce money different currency', () => {
  const bank = new Bank();
  bank.addRate('CHF', 'USD', 2);
  const result = bank.reduce(Money.franc(2), 'USD');
  expect(result).toEqual(Money.dollar(1));
});

test('Test mixed addition', () => {
  const fiveBucks = Money.dollar(5);
  const tenFrancs = Money.franc(10);
  const bank = new Bank();

  bank.addRate('CHF', 'USD', 2);
  const result = bank.reduce(fiveBucks.plus(tenFrancs), 'USD');

  expect(result).toEqual(Money.dollar(10));
});
