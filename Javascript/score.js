import { SNAKE_SPEED } from "./snake.js";

export function drawScore(gameBoard) {
  const playerScore = document.createElement('div');
  playerScore.innerHTML = `<p>${SNAKE_SPEED - 3}</p>`;
  playerScore.classList.add('score');
  gameBoard.appendChild(playerScore);
}
