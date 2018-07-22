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

  equals(object) {
    return this._amount === object._amount && this instanceof Dollar === object instanceof Dollar;
  }
}

export class Dollar extends Money {
  times(multiplier) {
    return new Dollar(this._amount * multiplier);
  }
}

export class Franc extends Money {
  times(multiplier) {
    return new Franc(this._amount * multiplier);
  }
}
