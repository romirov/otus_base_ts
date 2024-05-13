import { Check } from "./types/Check";

export const checkArray: Array<Check> = [];

export const createAndSaveCheckToArray = () => {
  const dateInput = document.getElementById("dateInput")?.innerHTML;
  const categoryInput = document.getElementById("categoryInput")?.innerHTML;
  // eslint-disable-next-line max-len
  const subcategoryInput = document.getElementById("subcategoryInput")?.innerHTML;

  // eslint-disable-next-line max-len
  const descriptionInput = document.getElementById("descriptionInput")?.innerHTML;
  const amountInput = document.getElementById("amountInput")?.innerHTML;
  
  const newExpenditure = new Check(
    dateInput,
    categoryInput,
    subcategoryInput,
    descriptionInput,
    amountInput
  );
  checkArray.push(newExpenditure);
}