import { snakeBody } from "./snake.js";

export function drawScore(gameBoard) {
  const playerScore = document.createElement('div');
  playerScore.innerHTML = `<p>${(snakeBody.length - 1) / 2}</p>`;
  playerScore.classList.add('score');
  gameBoard.appendChild(playerScore);
}
