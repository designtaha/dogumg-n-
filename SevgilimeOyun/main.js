// PASTA SAYFASI İÇİN KOD
if (document.getElementById('blowBtn')) {
  const blowBtn = document.getElementById('blowBtn');
  const flames = document.querySelectorAll('.candle .flame');

  blowBtn.addEventListener('click', () => {
    // Mum alev animasyonlarını durdur ve görünmez yap
    flames.forEach(flame => {
      flame.style.animation = 'none';
      flame.style.opacity = 0;
      flame.style.transition = 'opacity 1s';
    });

    // Butonu devre dışı bırak
    blowBtn.disabled = true;

    // Sayfayı opak yaparak soluklaştır
    document.body.style.transition = 'opacity 2s';
    document.body.style.opacity = 0;

    // 2 saniye sonra oyun sayfasına yönlendir
    setTimeout(() => {
      window.location.href = 'game.html';
    }, 2000);
  });
}


// OYUN SAYFASI İÇİN KOD
if (document.getElementById('gameContainer')) {
  const player = document.getElementById('player');
  const popup = document.getElementById('popup');
  const popupTitle = document.getElementById('popupTitle');
  const photoContainer = document.getElementById('photoContainer');
  const closePopupBtn = document.getElementById('closePopupBtn');

  const cols = 4;
  const rows = 3;
  const houseWidth = 150;
  const houseHeight = 120;

  let posX = 0;
  let posY = 0;

  const months = [
    "Ocak", "Şubat", "Mart", "Nisan",
    "Mayıs", "Haziran", "Temmuz", "Ağustos",
    "Eylül", "Ekim", "Kasım", "Aralık"
  ];

  // Ay isimleri ve fotoğraflar örnek (assets/img dizininde olmalı)
  const monthPhotos = {
    "Ocak": ["assets/img/ocak1.jpg", "assets/img/ocak2.jpg", "assets/img/ocak3.jpg"],
    "Şubat": ["assets/img/subat1.jpg", "assets/img/subat2.jpg", "assets/img/subat3.jpg"],
    "Mart": ["assets/img/mart1.jpg", "assets/img/mart2.jpg", "assets/img/mart3.jpg"],
    // ... diğer aylar da aynı formatta
  };

  // Oyuncu pozisyon güncelleme
  function updatePlayer() {
    player.style.left = posX * houseWidth + "px";
    player.style.top = posY * houseHeight + "px";
  }

  // Popup açma
  function openPopup(month) {
    popupTitle.textContent = month + " ayı anıları";
    photoContainer.innerHTML = "";

    const photos = monthPhotos[month] || [];
    photos.forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      img.style.width = "120px";
      img.style.margin = "5px";
      photoContainer.appendChild(img);
    });

    popup.style.display = "block";
  }

  // Popup kapama
  closePopupBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // Klavye hareketleri ve boşluk tuşu kontrolü
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" && posX < cols - 1) posX++;
    else if (e.key === "ArrowLeft" && posX > 0) posX--;
    else if (e.key === "ArrowDown" && posY < rows - 1) posY++;
    else if (e.key === "ArrowUp" && posY > 0) posY--;

    else if (e.key === " " || e.key === "Enter") {
      // Popup açılır
      const currentMonth = months[posY * cols + posX];
      openPopup(currentMonth);
    }

    updatePlayer();
  });

  updatePlayer();
}
