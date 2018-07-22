import { Money } from "./money";

export class Dollar extends Money {
  public times(multiplier: number): number {
    return this.amount * multiplier;
  }
}
