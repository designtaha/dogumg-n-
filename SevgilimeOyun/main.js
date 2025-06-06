// Ana script

document.addEventListener("DOMContentLoaded", () => {
  
  // İNDİX SAYFASI KODU
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

  // GAME SAYFASI KODU
  if (document.getElementById('gameContainer')) {
    const gameContainer = document.getElementById('gameContainer');
    const player = document.getElementById('player');
    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popupTitle');
    const photoContainer = document
