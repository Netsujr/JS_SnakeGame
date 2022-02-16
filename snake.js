export const SNAKE_SPEED = 0.5;
const snakeBody =
  [
    { x: 11, y: 11 },
    { x: 10, y: 11 },
    { x: 9, y: 11 },

  ];

export function update() {
  // console.log('update');
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
    // snakeBody[i]
  }
  snakeBody[0].x += 0;
  snakeBody[0].y += 1;
}

export function draw(gameBoard) {
  console.log('draw');
  snakeBody.forEach(segment => {
    const snakeElement = document.createElement('div');
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add('snake');
    gameBoard.appendChild(snakeElement);
    // console.log(segment);
  }
  );
};
