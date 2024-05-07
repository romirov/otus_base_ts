export function getCellState(field: number[][], x: number, y: number): number {
  const row: number[] = field[y];
  if (row === undefined) {
    return 0;
  }
  const cell: number = row[x];
  if (cell === undefined) {
    return 0;
  }
  return cell;
}

export function getNewCellState(
  currentCellState: number,
  numOfAliveNeighbours: number,
) {
  if (
    numOfAliveNeighbours === 3 ||
    (numOfAliveNeighbours === 2 && currentCellState === 1)
  ) {
    return 1;
  }
  return 0;
}

export function getNumOfAliveNeighbours(
  column: number,
  row: number,
  field: number[][],
): number {
  let neighbours = 0;

  for (let j = column - 1; j <= column + 1; j += 1) {
    neighbours += Number(getCellState(field, j, row - 1));
    neighbours += Number(getCellState(field, j, row + 1));
  }

  neighbours += Number(getCellState(field, column - 1, row));
  neighbours += Number(getCellState(field, column + 1, row));

  return neighbours;
}

export function getNextState(field: number[][]): number[][] {
  return field.map((row, rowIndex) =>
    row.map((cell, cellIndex) => {
      const an = getNumOfAliveNeighbours(cellIndex, rowIndex, field);
      const currentState = getCellState(field, cellIndex, rowIndex);
      const newState = getNewCellState(currentState, an);
      return newState;
    }),
  );
}

export function isAnyoneAlive(field: number[][]): boolean {
  for (let i = 0; i < field.length; i += 1) {
    const row = field[i];
    for (let j = 0; j < row.length; j += 1) {
      const cell = row[j];
      if (cell) {
        return true;
      }
    }
  }
  return false;
}
