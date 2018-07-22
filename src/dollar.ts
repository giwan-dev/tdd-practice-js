import { Money } from "./money";

export class Dollar extends Money {
  protected amount: number;

  constructor(amount: number) {
    super(amount);
    this.amount = amount;
  }

  public times(multiplier: number): number {
    return this.amount * multiplier;
  }

  public equals(dollar: Money): boolean {
    return this.amount === dollar.amount && this instanceof Dollar === dollar instanceof Dollar;
  }
}
