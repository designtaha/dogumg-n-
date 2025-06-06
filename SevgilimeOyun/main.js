// index.html kısmı

if (document.getElementById('blowBtn')) {
  const blowBtn = document.getElementById('blowBtn');
  const candles = document.querySelectorAll('.candle .flame');

  blowBtn.addEventListener('click', () => {
    // Mumları söndür animasyonu
    candles.forEach(flame => {
      flame.style.animation = 'none';
      flame.style.opacity = 0;
      flame.style.transition = 'opacity 1s';
    });

    // Butonu devre dışı bırak
    blowBtn.disabled = true;

    // Sayfa opaklığı azalt
    document.body.style.transition = 'opacity 2s';
    document.body.style.opacity = 0;

    // 2 saniye sonra game.html sayfasına yönlendir
    setTimeout(() => {
      window.location.href = 'game.html';
    }, 2000);
  });
}

// game.html kısmı

if (document.getElementById('gameContainer')) {
  const player = document.getElementById('player');
  const popup = document.getElementById('popup');
  const popupTitle = document.getElementById('popupTitle');
  const photoContainer = document.getElementById('photoContainer');
  const closePopupBtn = document.getElementById('closePopupBtn');

  // Oyun grid boyutları
  const cols = 4;
  const rows = 3;
  const houseWidth = 150; // grid hücresi genişliği (CSS gap dahil)
  const houseHeight = 120;

  // Player pozisyonu (x,y)
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
    "
