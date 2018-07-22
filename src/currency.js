export class Money {
  constructor(amount, currency) {
    this._amount = amount; // private member convention. 실제로 제한되지 않음
    this._currency = currency;
  }

  static dollar(amount) {
    return new Dollar(amount, 'USD');
  }

  static franc(amount) {
    return new Franc(amount, 'CHF');
  }

  times(multiplier) {
    if (this instanceof Dollar) {
      return new Dollar(this._amount * multiplier, 'USD');
    }
    if (this instanceof Franc) {
      return new Franc(this._amount * multiplier, 'CHF');
    }
    return null;
  }

  equals(object) {
    return this._amount === object._amount && this instanceof Dollar === object instanceof Dollar;
  }

  currency() {
    return this._currency;
  }
}

export class Dollar extends Money {
}

export class Franc extends Money {
}
