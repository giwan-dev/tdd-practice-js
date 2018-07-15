import { Dollar } from './currency';

test('$5 X 2 = $10', () => {
  const five = new Dollar(5);
  five.times(2);
  expect(Number(five.amount)).toBe(10);
});
