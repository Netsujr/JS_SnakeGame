import { onSnake, expandSnake, incrementSpeed, decrementSpeed } from "./snake.js";
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


function getRandomFoodPosition() {
  let newFoodPosition;
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition();
  }
  return newFoodPosition;
}

export function chooseFood(gameBoard) {
  let foodType = Math.floor(Math.random() * 6);
  console.log(foodType);
  if (foodType <= 4) {
    food1(gameBoard);
  } else {
    food2(gameBoard);
  }
}

function food1(gameBoard) {
  const foodElement = document.createElement('div');
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add('food');
  gameBoard.appendChild(foodElement);
};

function food2(gameBoard) {
  const foodElement = document.createElement('div');
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add('foodTwo');
  gameBoard.appendChild(foodElement);
};
