import { Money } from "./money";

export class Franc extends Money {
  protected amount: number;

  constructor(amount: number) {
    super(amount);
    this.amount = amount;
  }

  public times(multiplier: number): number {
    return this.amount * multiplier;
  }

  public equals(franc: Money): boolean {
    return this.amount === franc.amount && this instanceof Franc === franc instanceof Franc;
  }
}
