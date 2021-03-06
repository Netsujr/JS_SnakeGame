import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from './Javascript/snake.js';
import { drawScore } from './Javascript/score.js';
import { update as updateFood, update2 as updateFood2, food1 as drawFood1, food2 as drawFood2 } from './Javascript/food.js';
import { getSnakeHead } from './Javascript/snake.js';
import { outsideGrid } from './Javascript/grid.js';
import { snakeIntersectsSnake } from './Javascript/snake.js';
const gameBoard = document.querySelector('#game-board');
let playerScore = document.querySelector('.score');

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

setInterval(function () {
  gameBoard.style.backgroundColor = getRandomColor();
}, 5000);

// __________________________________________________________
let lastRenderTime = 0;
let gameOver = false;


function main(currentTime) {
  if (gameOver) {
    if (confirm('Game Over! Play again?')) {
      window.location.reload();
    }
    return;
  }

  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
  lastRenderTime = currentTime;

  update();
  draw();
  // console.log(SNAKE_SPEED);
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
  updateFood();
  updateFood2();
  checkCollisions();
}

function draw() {
  let playerScore2 = document.querySelector('.score');
  gameBoard.innerHTML = '';
  drawSnake(gameBoard);
  drawScore(gameBoard);
  drawFood1(gameBoard);
  if (playerScore2.innerText % 3 == 0 && playerScore2.innerText != 0) {
  drawFood2(gameBoard);
  }
  console.log(playerScore2.innerText);
}

function checkCollisions() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersectsSnake();
}
