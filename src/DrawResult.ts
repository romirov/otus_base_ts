import { ResultCheck } from "./types/ResultCheck";

export function drawResult(resultArray: Array<ResultCheck>) {
  const appEl = document.getElementById("app");
  let resultEl = document.getElementById("result")
  if (resultEl !== undefined) {
    document.removeChild(resultEl as Node)
    resultEl = document.createElement("div");
    resultEl.setAttribute("id", "result");
  }

  resultEl.innerHTML = JSON.stringify(resultArray);
  appEl?.appendChild(resultEl);
}