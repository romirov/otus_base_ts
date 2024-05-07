/* eslint-disable no-param-reassign */
import { createGameOfLife } from "./Game";
import { drawField } from "./GameView";

jest.mock("./GameView");

const sleep = (x: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, x);
  });

describe("createGameOfLife", () => {
  let element: HTMLElement;
  let button: HTMLButtonElement;
  let fieldWrapper: HTMLDivElement;
  const originalAlert = window.alert;
  let onCellClick: (x: number, y: number) => void;

  beforeEach(() => {
    element = document.createElement("div");
    window.alert = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
    window.alert = originalAlert;
  });

  describe("UI", () => {
    it("creates Start button and field", () => {
      createGameOfLife(10, 10, element);
      button = element.querySelector("button") as HTMLButtonElement;
      expect(button).toBeTruthy();
      expect(button.innerHTML).toBe("Start");
      expect(element.querySelector(".field-wrapper")).toBeTruthy();
    });
    it("changes button name on click", () => {
      createGameOfLife(10, 10, element);
      button = element.querySelector("button") as HTMLButtonElement;
      expect(button.innerHTML).toBe("Start");
      button.click();
      expect(button.innerHTML).toBe("Stop");
      button.click();
      expect(button.innerHTML).toBe("Start");
      button.click();
      expect(button.innerHTML).toBe("Stop");
    });
    it("draws field", () => {
      (drawField as jest.Mock).mockImplementation(
        (fieldEl: HTMLElement, field: number[][]) => {
          fieldEl.innerHTML = `drawField(${JSON.stringify(field)})`;
        },
      );
      createGameOfLife(2, 2, element);
      fieldWrapper = element.querySelector(".field-wrapper") as HTMLDivElement;
      expect(fieldWrapper.innerHTML).toBe(
        `drawField(${JSON.stringify([
          [0, 0],
          [0, 0],
        ])})`,
      );
    });
    it("redraw field on interaction with it", () => {
      (drawField as jest.Mock).mockImplementation(
        (
          fieldEl: HTMLElement,
          field: number[][],
          cellClickHandler: () => void,
        ) => {
          onCellClick = cellClickHandler;
          fieldEl.innerHTML = `drawField(${JSON.stringify(field)})`;
        },
      );
      createGameOfLife(2, 2, element);
      fieldWrapper = element.querySelector(".field-wrapper") as HTMLDivElement;
      expect(fieldWrapper.innerHTML).toBe(
        `drawField(${JSON.stringify([
          [0, 0],
          [0, 0],
        ])})`,
      );
      onCellClick(0, 0);
      expect(fieldWrapper.innerHTML).toBe(
        `drawField(${JSON.stringify([
          [1, 0],
          [0, 0],
        ])})`,
      );
      onCellClick(0, 0);
      expect(fieldWrapper.innerHTML).toBe(
        `drawField(${JSON.stringify([
          [0, 0],
          [0, 0],
        ])})`,
      );
      onCellClick(0, 1);
      onCellClick(1, 1);
      expect(fieldWrapper.innerHTML).toBe(
        `drawField(${JSON.stringify([
          [0, 0],
          [1, 1],
        ])})`,
      );
    });
    it("on start it runs 1sec timer to update state", async () => {
      (drawField as jest.Mock).mockImplementation(
        (
          fieldEl: HTMLElement,
          field: number[][],
          cellClickHandler: () => void,
        ) => {
          onCellClick = cellClickHandler;
          fieldEl.innerHTML = `drawField(${JSON.stringify(field)})`;
        },
      );
      createGameOfLife(2, 2, element);
      fieldWrapper = element.querySelector(".field-wrapper") as HTMLDivElement;
      button = element.querySelector("button") as HTMLButtonElement;
      onCellClick(0, 0);
      button.click();
      expect(fieldWrapper.innerHTML).toBe(
        `drawField(${JSON.stringify([
          [1, 0],
          [0, 0],
        ])})`,
      );
      await sleep(1000);
      expect(fieldWrapper.innerHTML).toBe(
        `drawField(${JSON.stringify([
          [0, 0],
          [0, 0],
        ])})`,
      );
    });
    it("stops game with alert, when none alive", async () => {
      (drawField as jest.Mock).mockImplementation(
        (
          fieldEl: HTMLElement,
          field: number[][],
          cellClickHandler: () => void,
        ) => {
          onCellClick = cellClickHandler;
          fieldEl.innerHTML = `drawField(${JSON.stringify(field)})`;
        },
      );
      createGameOfLife(2, 2, element);
      button = element.querySelector("button") as HTMLButtonElement;
      onCellClick(0, 0);
      button.click();
      await sleep(1000);
      expect(window.alert).toHaveBeenCalledWith("All cells died");
      expect(button.innerHTML).toBe("Start");
    });
  });
});
