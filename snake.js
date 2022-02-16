export const SNAKE_SPEED = 3;
const snakeBody = [{ x: 11, y: 11 }];

export function update() {
  console.log('update');
}

export function draw(gameBoard) {
  console.log('draw');
  snakeBody.forEach(segment => {
    const snakeElement = document.createElement('div');
    snakeElement.style.gridRowStart = segment.x;
    snakeElement.style.gridColumnStart = segment.y;
    snakeElement.classList.add('snake');
    gameBoard.appendChild(snakeElement);
    // console.log(segment);
  }
  );
};
