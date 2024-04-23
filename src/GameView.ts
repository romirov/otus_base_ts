import { Cell } from "./types/Cell";
import { removeAllChildNodes } from "./RemoveAllChildNodes";

export interface IGameView {
  updateGameField(field: Cell[][]): void;
  updateGameState(state: {
    width?: number;
    height?: number;
    isRunning?: boolean;
  }): void;
  onCellClick(cb: (x: number, y: number) => void): void;
  onGameStateChange(cb: (newState: boolean) => void): void;
  onFieldSizeChange(cb: (width: number, height: number) => void): void;
}

export class GameView implements IGameView{
  private gameField: HTMLElement;

  constructor(el: HTMLElement) {
    const newGameField = document.createElement("div");
    newGameField.classList.add("gameField");
    newGameField.classList.add("gameControls");
    this.gameField = newGameField;
    el.appendChild(this.gameField);
  }

  public updateGameField(field: number[][]) {
    removeAllChildNodes(this.gameField);
    
    // eslint-disable-next-line no-plusplus
    for(let x = 0; x < field.length; x++){
      // eslint-disable-next-line no-plusplus
      for(let y = 0; y < field[x].length; y++){
        const cell = document.createElement("div");
        cell.classList.add("cell");

        if(field[x][y] === 1)
          cell.classList.add("cell--alive");
        else
          cell.classList.add("cell--dead");

        this.gameField.appendChild(cell);
      }
    }
  }

  // eslint-disable-next-line max-len, class-methods-use-this, @typescript-eslint/no-unused-vars
  public updateGameState(state: { width?: number | undefined; height?: number | undefined; isRunning?: boolean | undefined; }) {
    throw new Error("Method not implemented.");
  }

  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-unused-vars
  public onCellClick(cb: (x: number, y: number) => void) {
    throw new Error("Method not implemented.");
  }

  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-unused-vars
  public onGameStateChange(cb: (newState: boolean) => void) {
    throw new Error("Method not implemented.");
  }

  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-unused-vars
  public onFieldSizeChange(cb: (width: number, height: number) => void) {
    throw new Error("Method not implemented.");
  }
  
}