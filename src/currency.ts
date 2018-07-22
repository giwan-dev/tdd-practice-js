export class Dollar {
  public amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  public times(multiplier: number): number {
    return this.amount * multiplier;
  }
}
