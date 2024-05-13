import { createAndSaveCheckToArray } from "./CreateAndSaveCheckToArray";
import { rateChecksByConditions } from "./RateChecksByConditions"
import { sortCategoryByAmount } from "./SortCategoryByAmount"

const given = document.getElementById("given");

export function drawApp(){
  const expenditureForm = document.createElement("form");
  const dateInput = document.createElement("input");
  dateInput.setAttribute("type", "date");
  dateInput.setAttribute("id", "dateInput");

  const categoryInput = document.createElement("input");
  categoryInput.setAttribute("type", "text");
  categoryInput.setAttribute("id", "categoryInput");

  const subcategoryInput = document.createElement("input");
  subcategoryInput.setAttribute("type", "text");
  subcategoryInput.setAttribute("id", "subcategoryInput");


  const descriptionInput = document.createElement("input");
  descriptionInput.setAttribute("type", "text");
  descriptionInput.setAttribute("id", "descriptionInput");

  const amountInput = document.createElement("input");
  amountInput.setAttribute("type", "text");
  amountInput.setAttribute("id", "amountInput");

  const submitBtn = document.createElement("button");
  submitBtn.setAttribute("type", "submit");
  submitBtn.setAttribute("id", "submitExpenditureForm");
  submitBtn.addEventListener('click', createAndSaveCheckToArray);

  expenditureForm.appendChild(dateInput);
  expenditureForm.appendChild(categoryInput);
  expenditureForm.appendChild(subcategoryInput);
  expenditureForm.appendChild(descriptionInput);
  expenditureForm.appendChild(amountInput);
  expenditureForm.appendChild(submitBtn);

  const resultForm = document.createElement("form");
  const dateStartInput = document.createElement("input");
  dateStartInput.setAttribute("type", "date");
  dateStartInput.setAttribute("id", "dateStartInput");

  const dateEndInput = document.createElement("input");
  dateEndInput.setAttribute("type", "date");
  dateEndInput.setAttribute("id", "dateEndInput");

  const submitRateByDateAndCategoryBtn = document.createElement("button");
  submitBtn.setAttribute("type", "submit");
  submitBtn.setAttribute("id", "submitRateByDateAndCategoryBtn");
  submitBtn.addEventListener('click', rateChecksByConditions);


  const submitRateByDateBtn = document.createElement("button");
  submitBtn.setAttribute("type", "submit");
  submitBtn.setAttribute("id", "submitRateByDateBtn");
  submitBtn.addEventListener('click', rateChecksByConditions);

  const submitSortCategoryByAmountBtn = document.createElement("button");
  submitBtn.setAttribute("type", "submit");
  submitBtn.setAttribute("id", "submitSortCategoryByAmountBtn");
  submitBtn.addEventListener('click', sortCategoryByAmount);

  resultForm.appendChild(dateStartInput);
  resultForm.appendChild(dateEndInput);
  resultForm.appendChild(submitRateByDateAndCategoryBtn);
  resultForm.appendChild(submitRateByDateBtn);
  resultForm.appendChild(submitSortCategoryByAmountBtn);

  given?.appendChild(expenditureForm);
  given?.appendChild(resultForm);
}