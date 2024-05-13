export class Expenditure{
  date: number = Date.now();

  category: string = "";

  subcategory : string = "";

  description: string = "";
  
  amount: number = 0;

  // eslint-disable-next-line max-len
  constructor(date: string | undefined, category: string | undefined, subcategory: string | undefined, description: string | undefined, amount: string | undefined){
    if(date !== undefined)
      this.date = Date.parse(date);
    if(category !== undefined)
      this.category = category;
    if(subcategory !== undefined)
      this.subcategory = subcategory;
    if(description !== undefined)
      this.description = description;
    if(amount !== undefined)
      this.amount = Number(amount);
  }
}