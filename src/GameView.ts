export function drawField(
  htmlElement: HTMLElement,
  field: number[][],
  onCellClick: (x: number, y: number) => void,
) {
  const rowIterator = (row: number[], rowIndex: number) =>
    `<tr>${row
      .map((cell: number, columnIndex: number) => {
        if (cell === 1) {
          return `<td 
        data-x=${columnIndex}
        data-y=${rowIndex}
        class="cell alive" 
        ></td>`;
        }
        return `<td 
      data-x=${columnIndex}
      data-y=${rowIndex}
      class="cell dead" 
      ></td>`;
      })
      .join("")}</tr>`;

  const table = `<table border=1>${field.map(rowIterator).join("")}</table>`;

  // eslint-disable-next-line no-param-reassign
  htmlElement.innerHTML = table;

  (htmlElement.querySelector("table") as HTMLElement).addEventListener(
    "click",
    (ev: Event) => {
      const clickedElement = ev.target as HTMLDivElement;

      if (!clickedElement) {
        throw Error;
      }

      const x = clickedElement.getAttribute("data-x");
      const y = clickedElement.getAttribute("data-y");

      if (Number(x) >= 0 && Number(y) >= 0) {
        onCellClick(Number(x), Number(y));
      }
    },
  );
}
