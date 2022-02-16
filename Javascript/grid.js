const GRID_COLUMNS = 21;
const GRID_ROWS = 21;

export function randomGridPosition() {
  return {
    x: Math.floor(Math.random() * GRID_COLUMNS) + 1,
    y: Math.floor(Math.random() * GRID_ROWS) + 1
  };
}


export function outsideGrid(position) {
  return position.x < 1 || position.x > GRID_COLUMNS ||
  position.y < 1 || position.y > GRID_ROWS;
}
