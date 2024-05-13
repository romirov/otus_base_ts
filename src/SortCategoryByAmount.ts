import { ResultCheck } from "./types/ResultCheck";
import { getChecksByDateRange } from "./GetChecksByDateRange"

export function sortCategoryByAmount(event: Event) {
  const elementId = (event.target as Element).id;
  const resultArray: Array<ResultCheck> = [];
  let checksByDateRange = getChecksByDateRange();
  
  if(checksByDateRange.length > 0){
    checksByDateRange.forEach((item) => {
      
      
      const amountsArray = checksByDateRange.filter((item1) =>
          // eslint-disable-next-line max-len
          (elementId === "sortCategoryByAmount" && item1.category === item.category)
        ).map((item1) => item1.amount);
        
      
      checksByDateRange = checksByDateRange.filter((item1) => 
        // eslint-disable-next-line max-len
        (elementId === "sortCategoryByAmount" && item1.category !== item.category)
      );
        

      const initialValue = 0;
      const sumWithInitial = amountsArray.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue,
      );

      resultArray.push(new ResultCheck(0, item.category, sumWithInitial));
      resultArray.sort((a, b) => a.amount > b.amount ? -1 : 1);
    });
  }
}