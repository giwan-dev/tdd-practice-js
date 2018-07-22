export class Money {
  constructor(amount) {
    this._amount = amount; // private member convention. 실제로 제한되지 않음
  }

  static dollar(amount) {
    return new Dollar(amount);
  }

  static franc(amount) {
    return new Franc(amount);
  }

  times(multiplier) {
    if (this instanceof Dollar) {
      return new Dollar(this._amount * multiplier);
    }
    if (this instanceof Franc) {
      return new Franc(this._amount * multiplier);
    }
    return null;
  }

  equals(object) {
    return this._amount === object._amount && this instanceof Dollar === object instanceof Dollar;
  }
}

export class Dollar extends Money {
  currency() {
    return 'USD';
  }
}

export class Franc extends Money {
  currency() {
    return 'CHF';
  }
}
