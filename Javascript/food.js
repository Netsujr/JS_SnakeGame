import { onSnake, expandSnake } from "./snake.js";
import { randomGridPosition } from "./grid.js";

let food = getRandomFoodPosition();
// 0 is outside of the grid
const EXPANSION_RATE = 2;


export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);
    food = getRandomFoodPosition();
  }
}


export function draw(gameBoard) {
  const foodElement = document.createElement('div');
  const SecondFood = document.createElement('div');
  // let random = Math.floor(Math.random() * 5) + 1;
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add('food');
  gameBoard.appendChild(foodElement);
  //append second food to game board every so often
  // SecondFood.style.gridRowStart = food.y + random;
  // SecondFood.style.gridColumnStart = food.x + random;
  // SecondFood.classList.add('newFood');
  // random number from 1 to 5
  // if (random == 5) {
  //   setInterval(function () {
  //     gameBoard.appendChild(SecondFood);
  //   }, 3000);
  // }
};


function getRandomFoodPosition() {
  let newFoodPosition;
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition();
  }
  return newFoodPosition;
}
