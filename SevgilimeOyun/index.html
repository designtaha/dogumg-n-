const blowBtn = document.getElementById('blowBtn');
const cakeScreen = document.getElementById('cakeScreen');
const gameScreen = document.getElementById('gameScreen');
const player = document.getElementById('player');

function blowCandles() {
  const candles = document.querySelectorAll('.candle');
  candles.forEach(c => {
    c.style.animation = 'blowOut 1s forwards';
  });

  cakeScreen.style.transition = 'opacity 2s';
  cakeScreen.style.opacity = 0;

  setTimeout(() => {
    cakeScreen.style.display = 'none';
    gameScreen.style.display = 'grid';
  }, 2000);
}

blowBtn.addEventListener('click', blowCandles);

// Karakter hareketi

const gridCols = 4;
const gridRows = 3;
const cellWidth = gameScreen.clientWidth / gridCols;
const cellHeight = gameScreen.clientHeight / gridRows;
let x = 0;
let y = 0;

function updatePlayerPosition() {
  player.style.left = x * (cellWidth + 10) + 10 + 'px'; 
  player.style.top = y * (cellHeight + 10) + 10 + 'px';
}

document.addEventListener('keydown', (e) => {
  if (gameScreen.style.display !== 'grid') return;

  if (e.key === 'ArrowRight' && x < gridCols - 1) x++;
  else if (e.key === 'ArrowLeft' && x > 0) x--;
  else if (e.key === 'ArrowDown' && y < gridRows - 1) y++;
  else if (e.key === 'ArrowUp' && y > 0) y--;

  updatePlayerPosition();
});

updatePlayerPosition();
