import { Dollar } from './currency';

test('Test multiplication', () => {
  const five = new Dollar(5);
  let product = five.times(2);
  expect(product).toBe(10);
  product = five.times(3);
  expect(product).toBe(15);
});

test('Test equality', () => {
  expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
  expect(new Dollar(5).equals(new Dollar(6))).toBe(false);
});
