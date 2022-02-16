function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

gameBoard = document.querySelector('#game-board');

// add and remove randomColor every 5 seconds with transition
setInterval(function() {
  gameBoard.style.backgroundColor = getRandomColor();
}, 5000);
