export class Money {
  constructor(amount, currency) {
    this._amount = amount; // private member convention. 실제로 제한되지 않음
    this._currency = currency;
  }

  static dollar(amount) {
    return new Money(amount, 'USD');
  }

  static franc(amount) {
    return new Money(amount, 'CHF');
  }

  times(multiplier) {
    return new Money(this._amount * multiplier, this._currency);
  }

  equals(object) {
    return this._amount === object._amount && this._currency === object._currency;
  }

  currency() {
    return this._currency;
  }
}
