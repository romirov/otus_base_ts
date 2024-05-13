export class Result {
  date: number;

  amount: number = 0;

  category: string = "";

  constructor(date: number, amount: number, category: string) {
    this.date = date;
    this.amount = amount;
    this.category = category;
  }
}