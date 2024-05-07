import { drawField } from "./GameView";
import { getNextState, isAnyoneAlive } from "./GameField";

export function createGameOfLife(
  sizeX: number,
  sizeY: number,
  htmlElement: HTMLElement,
): void {
  let gameIsRunning = false;
  let timer: NodeJS.Timeout;

  // eslint-disable-next-line no-param-reassign
  htmlElement.innerHTML = `
    <div class="field-wrapper"></div>
    <label >Установите скорость игры
      <input type="range" min="100" max="2000" />
    </label>
    <button>Start</button>
  `;

  const fieldWrapper = htmlElement.querySelector(
    ".field-wrapper",
  ) as HTMLElement;
  const button = htmlElement.querySelector("button") as HTMLElement;
  const input = htmlElement.querySelector("input") as HTMLInputElement;

  let field: number[][] = new Array(sizeY)
    .fill(0)
    .map(() => new Array(sizeX).fill(0));

  const cellClickHandler = (x: number, y: number): void => {
    field[y][x] = field[y][x] === 0 ? 1 : 0;
    drawField(fieldWrapper, field, cellClickHandler);
  };

  drawField(fieldWrapper, field, cellClickHandler);

  function stopGame() {
    gameIsRunning = false;
    button.innerHTML = "Start";
    clearInterval(timer);
  }

  function startGame(speed: number) {
    gameIsRunning = true;
    button.innerHTML = "Stop";

    timer = setInterval(() => {
      field = getNextState(field);
      drawField(fieldWrapper, field, cellClickHandler);
      if (!isAnyoneAlive(field)) {
        // eslint-disable-next-line no-alert
        alert("All cells died");
        stopGame();
      }
    }, speed);
  }

  button.addEventListener("click", () => {
    if (!gameIsRunning) {
      const speed = Number(input.value);
      startGame(speed);
    } else {
      stopGame();
    }
  });

  input.addEventListener("change", () => {
    if (gameIsRunning) {
      const speed = Number(input.value);
      stopGame();
      startGame(speed);
    }
  });
}
