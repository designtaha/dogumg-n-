const gameContainer = document.getElementById('gameContainer');
const player = document.getElementById('player');
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popupTitle');
const photoContainer = document.getElementById('photoContainer');
const closePopupBtn = document.getElementById('closePopupBtn');

const cols = 4;
const rows = 3;

const months = [
  "Ocak", "Şubat", "Mart", "Nisan",
  "Mayıs", "Haziran", "Temmuz", "Ağustos",
  "Eylül", "Ekim", "Kasım", "Aralık"
];

// Örnek foto dizisi (her ay için 3 resim)
const photos = {
  "Ocak": ["assets/img/ocak1.jpg", "assets/img/ocak2.jpg", "assets/img/ocak3.jpg"],
  "Şubat": ["assets/img/subat1.jpg", "assets/img/subat2.jpg", "assets/img/subat3.jpg"],
  "Mart": ["assets/img/mart1.jpg", "assets/img/mart2.jpg", "assets/img/mart3.jpg"],
  // diğer aylar benzer şekilde doldurulacak
};

let playerPos = { x: 0, y: 0 };

function createHouses() {
  for (let i = 0; i < 12; i++) {
    const house = document.createElement('div');
    house.classList.add('house');
    house.textContent = months[i];
    house.dataset.month = months[i];
    gameContainer.appendChild(house);
  }
}

function updatePlayerPosition() {
  // Grid hücre boyutu ile konum ayarlaması
  const house = gameContainer.querySelector('.house');
  const houseStyle = getComputedStyle(house);
  const houseWidth = parseInt(houseStyle.width) + 10; // gap=10px
  const houseHeight = parseInt(houseStyle.height) + 10;

  player.style.left = playerPos.x * houseWidth + 'px';
  player.style.top = playerPos.y * houseHeight + 'px';
}

function movePlayer(dx, dy) {
  let newX = playerPos.x + dx;
  let newY = playerPos.y + dy;

  if (newX >= 0 && newX < cols && newY >= 0 && newY < rows) {
    playerPos.x = newX;
    playerPos.y = newY;
    updatePlayerPosition();
  }
}

function showPhotos(month) {
  popupTitle.textContent = month;
  photoContainer.innerHTML = '';

  if (photos[month]) {
    photos[month].forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      photoContainer.appendChild(img);
    });
  } else {
    photoContainer.textContent = 'Fotoğraf yok.';
  }

  popup.style.display = 'block';
}

function hidePopup() {
  popup.style.display = 'none';
}

document.addEventListener('keydown', (e) => {
  if (popup.style.display === 'block') return; // popup açıkken hareket yok

  switch (e.key) {
    case 'ArrowUp': movePlayer(0, -1); break;
    case 'ArrowDown': movePlayer(0, 1); break;
    case 'ArrowLeft': movePlayer(-1, 0); break;
    case 'ArrowRight': movePlayer(1, 0); break;
    case ' ': // boşluk tuşu
      // Hangi eve denk geldiğini bul
      const index = playerPos.y * cols + playerPos.x;
      const currentMonth = months[index];
      showPhotos(currentMonth);
      break;
  }
});

closePopupBtn.addEventListener('click', hidePopup);

createHouses();
updatePlayerPosition();
