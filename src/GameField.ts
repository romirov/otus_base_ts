import { Cell } from "./types/Cell";

export interface IGameField {
  getState(): Cell[][];
  toggleCellState(x: number, y: number): void;
  nextGeneration(): void;
  setSize(width: number, height: number): void;
}

export class GameField implements IGameField {
  private field: Cell[][] = [];

  private width: number;

  private height: number;

  constructor(width: number = 5, height: number = 5) {
    this.width = width;
    this.height = height;
    // eslint-disable-next-line no-plusplus
    for(let x = 0; x < width; x++) {
      // eslint-disable-next-line no-plusplus
      for(let y = 0; y < width; y++) {
        this.field[x][y]= 0;
      }
    }
  }

  // eslint-disable-next-line class-methods-use-this
  getState(): number[][] {
    return this.field;
  }

  neighbours = (x: number, y: number): Cell[] => {
    const neighbours = [];
    const left = x - 1;
    const right = x + 1;
    const top = y - 1;
    const bottom = y + 1;

    if (x > 0) neighbours.push(this.field[left][y]); // left neighbour
    if (y > 0) neighbours.push(this.field[x][top]); // top neighbour
    if (x > 0 && y > 0) neighbours.push(this.field[left][top]); // top left neighbour
    if (x > 0 && y < this.height - 1) neighbours.push(this.field[left][bottom]); // bottom left neighbour

    if (x < this.width - 1) neighbours.push(this.field[right][y]); // right neighbour
    if (y < this.height - 1) neighbours.push(this.field[x][bottom]); // bottom neighbour
    if (y > 0 && x < this.width - 1) neighbours.push(this.field[right][top]); // top right neighbour
    
    // eslint-disable-next-line max-len
    if (x < this.width - 1 && y < this.height - 1) neighbours.push(this.field[right][bottom]); // bottom right neighbour

    return neighbours;
  };

  // eslint-disable-next-line class-methods-use-this
  toggleCellState(x: number, y: number) {
    const neighbourCounter = this.neighbours(x, y).reduce((a, b) => a + b, 0);
    if(neighbourCounter < 2 || neighbourCounter > 3) this.field[x][y] = 0;
    else this.field[x][y] = 1;
  }

  // eslint-disable-next-line class-methods-use-this
  nextGeneration() {
    // eslint-disable-next-line no-plusplus
    for(let x = this.width; x < this.width; x++) {
      // eslint-disable-next-line no-plusplus
      for(let y = this.height; y < this.height; y++) {
        this.toggleCellState(x, y);
      }
    }
  }

  // eslint-disable-next-line class-methods-use-this
  setSize(width: number, height: number) {
    if(this.width <= width || this.height <= height){
      // eslint-disable-next-line no-plusplus
      for(let x = 0; x < width; x++) {
        // eslint-disable-next-line no-plusplus
        for(let y = 0; y < height; y++) {
          this.field[x][y]= 0;
        }
      }
    } else {
      // eslint-disable-next-line no-plusplus
      for(let x = this.width; x < width; x++) {
        // eslint-disable-next-line no-plusplus
        for(let y = this.height; y < height; y++) {
          this.field[x][y]= 0;
        }
      }
    }
    this.width = width;
    this.height = height;
  }


}