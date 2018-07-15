export class Dollar {
  constructor(amount) {
    this.amount = amount;
  }

  times(multiplier) {
    return this.amount * multiplier;
  }

  equals(object) {
    return this.amount === object.amount;
  }
}
