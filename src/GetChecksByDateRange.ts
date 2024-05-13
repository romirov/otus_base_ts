import { checkArray } from "./CreateAndSaveCheckToArray"
import { ResultCheck } from "./types/ResultCheck";

export function getChecksByDateRange(): Array<ResultCheck> {
  const dateStartEl = document.getElementById("dateStartInput")?.innerHTML;
  const dateEndEl = document.getElementById("dateEndInput")?.innerHTML;
  const resultArray: Array<ResultCheck> = [];
  
  if(dateStartEl !== undefined && dateEndEl !== undefined){
    const dateStart = Date.parse(dateStartEl);
    const dateEnd = Date.parse(dateEndEl);

    checkArray.forEach((item) => {
      if (item.date >= dateStart && item.date <= dateEnd) {
        resultArray.push(new ResultCheck(
          item.date,
          item.category,
          item.amount
        ));
      }
    });
  }
  return resultArray;
}