import { onSnake, expandSnakeAndSpeed, expandSnakeNotSpeed } from "./snake.js";
import { randomGridPosition } from "./grid.js";

let food = getRandomFoodPosition();
let secondFood = getRandomFoodPosition();
const EXPANSION_RATE = 2;


export function update() {
  if (onSnake(food)) {
    expandSnakeAndSpeed(EXPANSION_RATE);
    food = getRandomFoodPosition();
  }
}

export function update2() {
  if (onSnake(secondFood)) {
  expandSnakeNotSpeed(EXPANSION_RATE);
  secondFood = getRandomFoodPosition();
  }
}

function getRandomFoodPosition() {
  let newFoodPosition;
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition();
  }
  return newFoodPosition;
}

export function food1(gameBoard) {
  const foodElement = document.createElement('div');
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add('food');
  gameBoard.appendChild(foodElement);
};

export function food2(gameBoard) {
  const foodElement = document.createElement('div');
  foodElement.style.gridRowStart = secondFood.y;
  foodElement.style.gridColumnStart = secondFood.x;
  foodElement.classList.add('foodTwo');
  gameBoard.appendChild(foodElement);
};
