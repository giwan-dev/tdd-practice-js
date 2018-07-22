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

  plus(addend) {
    return new Sum(this, addend);
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

  reduce(bank, to) {
    const rate = bank.rate(this._currency, to);
    return new Money(this._amount / rate, to);
  }
}

class Expression {

}

export class Sum extends Expression {
  constructor(augend, addend) {
    super();
    this.augend = augend;
    this.addend = addend;
  }

  reduce(bank, to) {
    const amount = this.augend._amount + this.addend._amount;
    return new Money(amount, to);
  }
}

export class Bank {
  constructor() {
    this._rates = [];
  }

  reduce(source, to) {
    return source.reduce(this, to);
  }

  addRate(from, to, rate) {
    this._rates.push({
      from,
      to,
      rate,
    });
  }

  rate(from, to) {
    let targetRate;
    this._rates.forEach((element) => {
      if (element.from === from && element.to === to) {
        targetRate = element.rate;
      }
    });
    return targetRate;
  }
}
