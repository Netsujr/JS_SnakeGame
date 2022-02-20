import { getInputDirection } from "./input.js";

let newSegments = 0;
export let SNAKE_SPEED = 3;
const snakeBody = [{ x: 11, y: 11 }];

export function update() {
  // console.log('update');
  addSegments();
  const inputDirection = getInputDirection();
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
    // snakeBody[i]
  }
  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
}

export function draw(gameBoard) {
  // console.log('draw');
  snakeBody.forEach(segment => {
    const snakeElement = document.createElement('div');
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add('snake');
    gameBoard.appendChild(snakeElement);
    // console.log(segment);
  });
}

export function expandSnake(amount) {
  newSegments += amount;
  incrementSpeed();
}

export function onSnake(position, { ignoreHead = false } = {}) {
  return snakeBody.some((segment, index) => {
    if (ignoreHead && index === 0) return false;
    return equalPositions(segment, position);
  });
}

export function snakeIntersectsSnake() {
  return onSnake(snakeBody[0], { ignoreHead: true });
}

function equalPositions(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y;
}

function addSegments() {
  for (let i = 0; i < newSegments; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
  }
  newSegments = 0;
};

export function getSnakeHead() {
  return snakeBody[0];
}

export function incrementSpeed() {
  SNAKE_SPEED++;
}

export function decrementSpeed() {
  SNAKE_SPEED--;
}
