import "./styles.css";
import { createGameOfLife } from "./Game";

const gameWrapper: HTMLDivElement = document.createElement("div");

document.body.appendChild(gameWrapper);

createGameOfLife(10, 10, gameWrapper);
