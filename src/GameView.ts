import { Cell } from "./types/Cell";
import { removeAllChildNodes } from "./RemoveAllChildNodes";

const onCellClick = (x: number, y: number) => {
  const el = document.elementFromPoint(x, y);
  if(el !== null){
    if(el?.className === "cell--alive"){
      el.classList.remove("cell--alive");
      el.classList.add("cell--dead");
    } else {
      el.classList.add("cell--dead");
      el.classList.remove("cell--alive");
    }
  }
}

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

  private gField: Cell[][] | undefined;

  
  private gFieldWidth: number|undefined;

  private gFieldHeight: number|undefined;

  private gIsRunning: boolean|undefined;

  constructor(el: HTMLElement) {
    const newGameField = document.createElement("div");
    newGameField.classList.add("gameField");
    newGameField.classList.add("gameControls");
    this.gameField = newGameField;
    el.appendChild(this.gameField);
  }

  public updateGameField(field: number[][]) {
    removeAllChildNodes(this.gameField);
    this.gField = field;
    
    // eslint-disable-next-line no-plusplus
    for(let x = 0; x < field.length; x++){
      // eslint-disable-next-line no-plusplus
      for(let y = 0; y < field[x].length; y++){
        const cell = document.createElement("div");
        cell.classList.add("cell");

        if(field[x][y] === 1)
          cell.classList.add("cell--alive");

        this.gameField.appendChild(cell);
      }
    }
  }

  // eslint-disable-next-line max-len, class-methods-use-this, @typescript-eslint/no-unused-vars
  public updateGameState(state: { width?: number; height?: number; isRunning?: boolean; }) {
    // eslint-disable-next-line max-len
    if(state.isRunning === true && state.width !== undefined && state.height !== undefined){
      this.gFieldWidth = state.width;
      this.gFieldHeight = state.height;
      this.gIsRunning = state.isRunning;

      removeAllChildNodes(this.gameField);
      // eslint-disable-next-line no-plusplus
      for(let x = 0; x < state.width; x++){
        // eslint-disable-next-line no-plusplus
        for(let y = 0; y < state.height; y++){
          const cell = document.createElement("div");
          cell.classList.add("cell");

          this.gameField.appendChild(cell);
        }
      }
      
    } else {
      removeAllChildNodes(this.gameField);
    }
  }

  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  public onCellClick(cb: (x: number, y: number) => void): void {
    if(this.gField){
      // eslint-disable-next-line no-plusplus
      for(let x = 0; x < this.gField.length; x++){
        // eslint-disable-next-line no-plusplus
        for(let y = 0; y < this.gField[x].length; y++){
          cb(x, y);
        }
      }
    }
  }

  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-unused-vars
  public onGameStateChange(cb: (newState: boolean) => void) {
    if(this.gIsRunning !== undefined)
      cb(this.gIsRunning);
  }

  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-unused-vars
  public onFieldSizeChange(cb: (width: number, height: number) => void) {
    if(this.gFieldWidth !== undefined && this.gFieldHeight !== undefined)
      cb(this.gFieldWidth, this.gFieldHeight)
  }
}