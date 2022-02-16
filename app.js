import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from './Javascript/snake.js';
import { update as updateFood, draw as drawFood } from './Javascript/food.js';
const gameBoard = document.querySelector('#game-board');

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


// add and remove randomColor every 5 seconds with transition
setInterval(function() {
  gameBoard.style.backgroundColor = getRandomColor();
}, 5000);

// __________________________________________________________
let lastRenderTime = 0;

function main(currentTime) {
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
  lastRenderTime = currentTime;
  // console.log(currentTime);

  update();
  draw();
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
  updateFood();
}

function draw() {
  gameBoard.innerHTML = '';
  drawSnake(gameBoard);
  drawFood(gameBoard);
}
