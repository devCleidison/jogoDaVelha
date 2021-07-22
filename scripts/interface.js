let popup = document.getElementsByClassName('popup')[0];
let winner = document.getElementById('vencedor');

console.log(popup)

document.addEventListener('DOMContentLoaded', () => {
  let squares = document.querySelectorAll('.square');

  squares.forEach((square) => {
    square.addEventListener('click', handleClick);
  })
})

function handleClick(event) {
  let square = event.target;
  let position = square.id;

  if(handleMove(position)) {
    setTimeout(() => {
      winner.innerHTML = `<div class="${board[position]}"></div>`;
      popupGame();
    },100);
  }
  updateSquare(position);
}

function updateSquare(position) {
  let square = document.getElementById(position.toString());
  let symbol = board[position];

  square.innerHTML = `<div class="${symbol}"></div>`
}

function restart() {
  board = ['', '', '', '', '', '', '', '', ''];
  playerTime = 0;
  gameOver = false;

  updateSquares();
}

function updateSquares() {
  let squares = document.querySelectorAll('.square');

  squares.forEach((square) => {
    square.innerHTML = '';
  })
}

function popupGame() {
  popup.classList.toggle('hiddenPopup');
}