// index.html için mum söndürme ve sayfa geçişi
if (document.getElementById('blowBtn')) {
  const blowBtn = document.getElementById('blowBtn');
  const flames = document.querySelectorAll('.flame');

  blowBtn.addEventListener('click', () => {
    flames.forEach(flame => {
      flame.style.animation = 'none';
      flame.style.opacity = 0;
      flame.style.transition = 'opacity 1s';
    });

    blowBtn.disabled = true;
    document.body.style.transition = 'opacity 2s';
    document.body.style.opacity = 0;

    setTimeout(() => {
      window.location.href = 'game.html';
    }, 2000);
  });
}

// game.html için oyun mantığı
if (document.getElementById('gameContainer')) {
  const gameContainer = document.getElementById('gameContainer');
  const player = document.getElementById('player');
  const popup = document.getElementById('popup');
  const popupTitle = document.getElementById('popupTitle');
  const photoContainer = document.getElementById('photoContainer');
  const closePopupBtn = document.getElementById('closePopupBtn');

  const cols = 4;
  const rows = 3;

  // Ay isimleri ve fotoğraflar (buraya kendi resimlerinizi ekleyin)
  const monthData = {
    "Ocak": ["assets/img/ocak1.jpg", "assets/img/ocak2.jpg", "assets/img/ocak3.jpg"],
    "Şubat": ["assets/img/subat1.jpg", "assets/img/subat2.jpg", "assets/img/subat3.jpg"],
    "Mart": ["assets/img/mart1.jpg", "assets/img/mart2.jpg", "assets/img/mart3.jpg"],
    "Nisan": ["assets/img/nisan1.jpg", "assets/img/nisan2.jpg", "assets/img/nisan3.jpg"],
    "Mayıs": ["assets/img/mayis1.jpg", "assets/img/mayis2.jpg", "assets/img/mayis3.jpg"],
    "Haziran": ["assets/img/haziran1.jpg", "assets/img/haziran2.jpg", "assets/img/haziran3.jpg"],
    "Temmuz": ["assets/img/temmuz1.jpg", "assets/img/temmuz2.jpg", "assets/img/temmuz3.jpg"],
    "Ağustos": ["assets/img/agustos1.jpg", "assets/img/agustos2.jpg", "assets/img/agustos3.jpg"],
    "Eylül": ["assets/img/eylul1.jpg", "assets/img/eylul2.jpg", "assets/img/eylul3.jpg"],
    "Ekim": ["assets/img/ekim1.jpg", "assets/img/ekim2.jpg", "assets/img/ekim3.jpg"],
    "Kasım": ["assets/img/kasim1.jpg", "assets/img/kasim2.jpg", "assets/img/kasim3.jpg"],
    "Aralık": ["assets/img/aralik1.jpg", "assets/img/aralik2.jpg", "assets/img/aralik3.jpg"],
  };

  // Evleri oluştur
  const months = Object.keys(monthData);
  months.forEach((month, idx) => {
    const house = document.createElement('div');
    house.className = 'house';
    house.textContent = month;
    house.dataset.month = month;
    gameContainer.appendChild(house);
  });

  // Player başlangıç pozisyonu (0,0)
  let posX = 0;
  let posY = 0;

  const updatePlayerPos = () => {
    const gap = 10; // CSS gap
    const houseElem = document.querySelector('.house');
    const houseWidth = houseElem.offsetWidth;
    const houseHeight = houseElem.offsetHeight;

    player.style.left = (posX * (houseWidth + gap) + 10) + 'px'; // +10 padding
    player.style.top = (posY * (houseHeight + gap) + 10) + 'px';
  };

  updatePlayerPos();

  // Klavye ile hareket
  document.addEventListener('keydown', (e) => {
    if (popup.style.display === 'block') return; // Popup açıkken hareket yok

    switch (e.key) {
      case 'ArrowUp':
        if (posY > 0) posY--;
        break;
      case 'ArrowDown':
        if (posY < rows -1) posY++;
        break;
      case 'ArrowLeft':
        if (posX > 0) posX--;
        break;
      case 'ArrowRight':
        if (posX < cols -1) posX++;
        break;
      case ' ':
        // Boşluk tuşu ile popup aç
        const currentMonth = months[posY * cols + posX];
        if (currentMonth) {
          openPopup(currentMonth);
        }
        break;
      default:
        return;
    }
    updatePlayerPos();
    e.preventDefault();
  });

  // Popup açma fonksiyonu
  function openPopup(month) {
    popupTitle.textContent = month + ' Ayı Fotoğrafları';
    photoContainer.innerHTML = '';
    monthData[month].forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      photoContainer.appendChild(img);
    });
    popup.style.display = 'block';
  }

  closePopupBtn.addEventListener('click', () => {
    popup.style.display = 'none';
  });
}
