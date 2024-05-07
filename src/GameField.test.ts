import {
  getCellState,
  getNewCellState,
  getNextState,
  getNumOfAliveNeighbours,
  isAnyoneAlive,
} from "./GameField";

describe("getCellState", () => {
  const field: number[][] = [
    [0, 0, 0, 0],
    [1, 0, 0, 1],
    [0, 0, 0, 0],
    [1, 0, 1, 0],
  ];
  const expectedCellStates: number[][] = [
    [0, 0, 0, 0],
    [1, 0, 0, 1],
    [0, 0, 0, 0],
    [1, 0, 1, 0],
  ];

  it("returns `0` for [[0]]] 0:0", () => {
    expect(getCellState([[0]], 0, 0)).toBe(0);
  });

  it("returns list of cellStates", () => {
    for (let i = 0; i < field.length; i += 1) {
      for (let j = 0; j < field[i].length; j += 1) {
        expect(getCellState(field, j, i)).toBe(expectedCellStates[i][j]);
      }
    }
  });

  it("returns `0` for fields out of range", () => {
    for (let i = -1; i < 1; i += 1) {
      for (let j = -1; j < 1; j += 1) {
        expect(getCellState([], i, j)).toBe(0);
        expect(getCellState([[]], i, j)).toBe(0);
        expect(getCellState([[0]], i, j)).toBe(0);
      }
    }
  });

  it("returns valid values for triangle", () => {
    const triangleField: number[][] = [
      [1, 1],
      [1, 0],
    ];
    expect(getCellState(triangleField, 0, 0)).toBe(1);
    expect(getCellState(triangleField, 1, 0)).toBe(1);
    expect(getCellState(triangleField, 0, 1)).toBe(1);
    expect(getCellState(triangleField, 1, 1)).toBe(0);
  });
});

describe("getNewCellState", () => {
  it("should return valid new state", () => {
    expect(getNewCellState(0, 0)).toBe(0);
    expect(getNewCellState(0, 1)).toBe(0);
    expect(getNewCellState(0, 2)).toBe(0);
    expect(getNewCellState(0, 3)).toBe(1);
    expect(getNewCellState(0, 4)).toBe(0);
    expect(getNewCellState(0, 5)).toBe(0);
    expect(getNewCellState(0, 6)).toBe(0);
    expect(getNewCellState(0, 7)).toBe(0);
    expect(getNewCellState(0, 8)).toBe(0);

    expect(getNewCellState(1, 0)).toBe(0);
    expect(getNewCellState(1, 1)).toBe(0);
    expect(getNewCellState(1, 2)).toBe(1);
    expect(getNewCellState(1, 3)).toBe(1);
    expect(getNewCellState(1, 4)).toBe(0);
    expect(getNewCellState(1, 5)).toBe(0);
    expect(getNewCellState(1, 6)).toBe(0);
    expect(getNewCellState(1, 7)).toBe(0);
    expect(getNewCellState(1, 8)).toBe(0);
  });
});

function fieldToStr(field: number[][]): string {
  return `\n${field.map((el) => el.join("")).join("\n")}\n`;
}

describe("getNextState", () => {
  [
    { field: [[0]], nextState: [[0]] },
    { field: [[0], [0]], nextState: [[0], [0]] },
    { field: [[1]], nextState: [[0]] },
    { field: [[0], [1]], nextState: [[0], [0]] },
    {
      field: [
        [1, 1],
        [1, 0],
      ],
      nextState: [
        [1, 1],
        [1, 1],
      ],
    },
    {
      field: [
        [1, 1],
        [1, 1],
      ],
      nextState: [
        [1, 1],
        [1, 1],
      ],
    },
    {
      field: [
        [1, 1, 1],
        [1, 1, 1],
      ],
      nextState: [
        [1, 0, 1],
        [1, 0, 1],
      ],
    },
    {
      field: [
        [1, 0, 1],
        [1, 0, 1],
      ],
      nextState: [
        [0, 0, 0],
        [0, 0, 0],
      ],
    },
  ].forEach((el) => {
    it(`returns ${fieldToStr(el.nextState)} for ${fieldToStr(
      el.field,
    )}`, () => {
      expect(getNextState(el.field)).toEqual(el.nextState);
    });
  });
});

describe("getNumOfAliveNeighbours", () => {
  it("is a function", () => {
    expect(typeof getNumOfAliveNeighbours).toBe("function");
  });

  [
    { x: 0, y: 0, field: [[]], expectedResult: 0 },
    { x: 0, y: 0, field: [[0], [0]], expectedResult: 0 },
    { x: 0, y: 0, field: [[1], [1]], expectedResult: 1 },
    {
      x: 0,
      y: 0,
      field: [
        [0, 1, 0],
        [1, 0, 0],
      ],
      expectedResult: 2,
    },
    {
      x: 0,
      y: 0,
      field: [
        [1, 1],
        [1, 0],
      ],
      expectedResult: 2,
    },
    {
      x: 1,
      y: 0,
      field: [
        [1, 1],
        [1, 0],
      ],
      expectedResult: 2,
    },
    {
      x: 0,
      y: 1,
      field: [
        [1, 1],
        [1, 0],
      ],
      expectedResult: 2,
    },
    {
      x: 1,
      y: 1,
      field: [
        [1, 1],
        [1, 0],
      ],
      expectedResult: 3,
    },
    {
      x: 0,
      y: 0,
      field: [
        [1, 1],
        [1, 1],
      ],
      expectedResult: 3,
    },
  ].forEach((el) => {
    it(`should return ${el.expectedResult} for cell (${el.x},${
      el.y
    }) in field ${JSON.stringify(el.field)}`, () => {
      expect(getNumOfAliveNeighbours(el.x, el.y, el.field)).toBe(
        el.expectedResult,
      );
    });
  });
});

describe("isAnyoneAlive", () => {
  it("is a function", () => {
    expect(typeof isAnyoneAlive).toBe("function");
  });

  it("returns `false` for empty field", () => {
    expect(isAnyoneAlive([])).toBe(false);
    expect(isAnyoneAlive([[]])).toBe(false);
  });

  it("returns `true` for field 1x1 from 1", () => {
    expect(isAnyoneAlive([[1]])).toBe(true);
  });
  [
    { field: [], expectedResult: false },
    { field: [[]], expectedResult: false },
    { field: [[1]], expectedResult: true },
    { field: [[1], [0]], expectedResult: true },
    { field: [[0], [0]], expectedResult: false },
    {
      field: [
        [0, 0, 0],
        [0, 0, 1],
      ],
      expectedResult: true,
    },
  ].forEach((el) => {
    it(`should return ${el.expectedResult} for ${JSON.stringify(
      el.field,
    )}`, () => {
      expect(isAnyoneAlive(el.field)).toBe(el.expectedResult);
    });
  });
});
