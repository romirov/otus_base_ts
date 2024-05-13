import { Expenditure } from "./types/Expenditure";
import { Result } from "./types/Result";


const expenditureArray: Array<Expenditure> = []

const createExpenditure = () => {
  const dateInput = document.getElementById("dateInput")?.innerHTML;
  const categoryInput = document.getElementById("categoryInput")?.innerHTML;
  // eslint-disable-next-line max-len
  const subcategoryInput = document.getElementById("subcategoryInput")?.innerHTML;

  // eslint-disable-next-line max-len
  const descriptionInput = document.getElementById("descriptionInput")?.innerHTML;
  const amountInput = document.getElementById("amountInput")?.innerHTML;
  
  // eslint-disable-next-line max-len
  const newExpenditure = new Expenditure(dateInput, categoryInput, subcategoryInput, descriptionInput, amountInput);
  expenditureArray.push(newExpenditure);
}

const rateByDateAndCategory = () => {
  const dateStartEl = document.getElementById("dateStartInput")?.innerHTML;
  const dateEndEl = document.getElementById("dateEndInput")?.innerHTML;
  if(dateStartEl !== undefined && dateEndEl !== undefined){
    const dateStart = Date.parse(dateStartEl);
    const dateEnd = Date.parse(dateEndEl);
  }
}

const rateByDate = () => {
  const dateStartEl = document.getElementById("dateStartInput")?.innerHTML;
  const dateEndEl = document.getElementById("dateEndInput")?.innerHTML;
  const resultArray: Array<Result> = [];
  
  if(dateStartEl !== undefined && dateEndEl !== undefined){
    const dateStart = Date.parse(dateStartEl);
    const dateEnd = Date.parse(dateEndEl);

    expenditureArray.forEach((item) => {
      const result = new Result(item.date, 0, "");
      if(item.date >= dateStart && item.date <= dateEnd){
        // eslint-disable-next-line max-len
        if(resultArray.length > 0 && item.date !in resultArray.map((i1) => i1.date)){

            // eslint-disable-next-line max-len
            const amountsArray = expenditureArray.filter((item1) => item1.date === item.date).map((item1) => item1.amount);
            const initialValue = 0;
            const sumWithInitial = amountsArray.reduce(
              (accumulator, currentValue) => accumulator + currentValue,
              initialValue,
            );
            result.amount = sumWithInitial;
            resultArray.push(result);
          }
        }
    });     
  }
}

const sortCategoryByAmount = () => {
  const dateStartEl = document.getElementById("dateStartInput")?.innerHTML;
  const dateEndEl = document.getElementById("dateEndInput")?.innerHTML;
  if(dateStartEl !== undefined && dateEndEl !== undefined){
    const dateStart = Date.parse(dateStartEl);
    const dateEnd = Date.parse(dateEndEl);
  }
}

const app = document.getElementById("app");

function drawApp(){
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
  submitBtn.addEventListener('click', createExpenditure);

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
  submitBtn.addEventListener('click', rateByDateAndCategory);


  const submitRateByDateBtn = document.createElement("button");
  submitBtn.setAttribute("type", "submit");
  submitBtn.setAttribute("id", "submitRateByDateBtn");
  submitBtn.addEventListener('click', rateByDate);

  const submitSortCategoryByAmountBtn = document.createElement("button");
  submitBtn.setAttribute("type", "submit");
  submitBtn.setAttribute("id", "submitSortCategoryByAmountBtn");
  submitBtn.addEventListener('click', sortCategoryByAmount);

  resultForm.appendChild(dateStartInput);
  resultForm.appendChild(dateEndInput);
  resultForm.appendChild(submitRateByDateAndCategoryBtn);
  resultForm.appendChild(submitRateByDateBtn);
  resultForm.appendChild(submitSortCategoryByAmountBtn);

  app?.appendChild(expenditureForm);
  app?.appendChild(resultForm);
}

drawApp()