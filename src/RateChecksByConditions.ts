import { ResultCheck } from "./types/ResultCheck";
import { getChecksByDateRange } from "./GetChecksByDateRange"

export function rateChecksByConditions(event: Event) {
  const elementId = (event.target as Element).id;
  const resultArray: Array<ResultCheck> = [];
  let checksByDateRange = getChecksByDateRange();
  
  if(checksByDateRange.length > 0){
    checksByDateRange.forEach((item) => {
      
      const amountsArray = checksByDateRange.filter((item1) =>
          (elementId === "submitRateByDateBtn" && item1.date === item.date) ||
          // eslint-disable-next-line max-len
          (elementId === "submitRateByDateAndCategoryBtn" && item1.category === item.category)
        ).map((item1) => item1.amount);
        
      
      checksByDateRange = checksByDateRange.filter((item1) => 
        (elementId === "submitRateByDateBtn" && item1.date !== item.date) ||
        // eslint-disable-next-line max-len
        (elementId === "submitRateByDateAndCategoryBtn" && item1.category !== item.category)
      );
        

      const initialValue = 0;
      const sumWithInitial = amountsArray.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue,
      );

      if(elementId === "submitRateByDateBtn")
        resultArray.push(new ResultCheck(item.date, "", sumWithInitial));
      if(elementId === "submitRateByDateAndCategoryBtn")
        resultArray.push(new ResultCheck(0, item.category, sumWithInitial));
      
    });     
  }
}