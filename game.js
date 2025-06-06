document.addEventListener('DOMContentLoaded', () => {
  const player = document.getElementById('player');
  const popup = document.getElementById('popup');
  const popupTitle = document.getElementById('popupTitle');
  const photoContainer = document.getElementById('photoContainer');
  const closePopupBtn = document.getElementById('closePopupBtn');
  const gameContainer = document.querySelector('.game-container');

  // Grid ayarları
  const cols = 4;
  const rows = 3;
  const houseWidth = gameContainer.clientWidth / cols;
  const houseHeight = gameContainer.clientHeight / rows;

  // Başlangıç pozisyonu (0,0)
  let posX = 0;
  let posY = 0;

  // Ev isimleri ve fotoğraf dizileri
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

  // Ay isimleri grid sırasına göre
  const months = Object.keys(monthData);

  // Player pozisyonunu güncelle
  function updatePlayerPosition() {
    player.style.left = posX * (houseWidth + 10) + 10 + 'px'; // 10 px gap dahil
    player.style.top = posY * (houseHeight + 10) + 10 + 'px';
  }

  updatePlayerPosition();

  // Popup açma
  function openPopup(month) {
    popupTitle.textContent = month + " Ayının Fotoğrafları";
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

  // Klavye ile hareket ve fotoğraf açma
  document.addEventListener('keydown', (e) => {
    if (popup.style.display === 'block') return; // Popup açıkken hareket yok

    switch(e.key) {
      case 'ArrowUp':
        if (posY > 0) posY--;
        updatePlayerPosition();
        break;
      case 'ArrowDown':
        if (posY < rows - 1) posY++;
        updatePlayerPosition();
        break;
      case 'ArrowLeft':
        if (posX > 0) posX--;
        updatePlayerPosition();
        break;
      case 'ArrowRight':
        if (posX < cols -1) posX++;
        updatePlayerPosition();
        break;
      case ' ':
      case 'Spacebar': // eski tarayıcılar için
        // Şu anki ayı hesapla
        const index = posY * cols + posX;
        const month = months[index];
        if (month) openPopup(month);
        break;
    }
  });
});
