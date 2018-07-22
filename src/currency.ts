export class Dollar {
  private amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  public times(multiplier: number): number {
    return this.amount * multiplier;
  }

  public equals(dollar: Dollar): boolean {
    return this.amount === dollar.amount;
  }
}
