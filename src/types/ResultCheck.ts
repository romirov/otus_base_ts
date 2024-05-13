export class ResultCheck {
  date: number;

  category: string = "";

  amount: number = 0;

  constructor(
    date: number,
    category: string,
    amount: number
  ) {
    this.date = date;
    this.amount = amount;
    this.category = category;
  }
}