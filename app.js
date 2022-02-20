import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, drawScore } from './Javascript/snake.js';
import { update as updateFood, chooseFood as drawFood } from './Javascript/food.js';
import { getSnakeHead } from './Javascript/snake.js';
import { outsideGrid } from './Javascript/grid.js';
import { snakeIntersectsSnake } from './Javascript/snake.js';
const gameBoard = document.querySelector('#game-board');

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
  console.log(SNAKE_SPEED);

  update();
  draw();
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
  updateFood();
  checkCollisions();
}

function draw() {
  gameBoard.innerHTML = '';
  drawSnake(gameBoard);
  drawScore(gameBoard);
  drawFood(gameBoard);
}

function checkCollisions() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersectsSnake();
}
