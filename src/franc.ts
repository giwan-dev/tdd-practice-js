import { Money } from "./money";

export class Franc extends Money {
  public times(multiplier: number): number {
    return this.amount * multiplier;
  }
}
