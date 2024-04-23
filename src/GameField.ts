import { Cell } from "./types/Cell";

export interface IGameField {
  getState(): Cell[][];
  toggleCellState(x: number, y: number): void;
  nextGeneration(): void;
  setSize(width: number, height: number): void;
}

export class GameField implements IGameField {
  private width: number;

  private height: number;

  constructor(width: number = 0, height: number = 0) {
    this.width = width;
    this.height = height;
  }

  // eslint-disable-next-line class-methods-use-this
  getState(): number[][] {
    throw new Error("Method not implemented.");
  }

  // eslint-disable-next-line class-methods-use-this
  toggleCellState(x: number, y: number) {
    throw new Error("Method not implemented.");
  }

  // eslint-disable-next-line class-methods-use-this
  nextGeneration() {
    throw new Error("Method not implemented.");
  }

  // eslint-disable-next-line class-methods-use-this
  setSize(width: number, height: number) {
    throw new Error("Method not implemented.");
  }

}