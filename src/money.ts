import { Dollar } from './dollar';

export class Money {
  protected amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  public equals(money: Money): boolean {
    return this.amount === money.amount && this instanceof Dollar === money instanceof Dollar;
  }
}
