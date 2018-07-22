export class Dollar {
  constructor(amount) {
    this._amount = amount; // private member convention. 실제로 제한되지 않음
  }

  times(multiplier) {
    return new Dollar(this._amount * multiplier);
  }

  equals(object) {
    return this._amount === object._amount;
  }
}

export class Franc {
  constructor(amount) {
    this._amount = amount; // private member convention. 실제로 제한되지 않음
  }

  times(multiplier) {
    return new Franc(this._amount * multiplier);
  }

  equals(object) {
    return this._amount === object._amount;
  }
}
