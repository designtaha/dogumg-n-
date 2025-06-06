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

  // 2 saniye sonra oyun sayfasına git
  setTimeout(() => {
    window.location.href = 'game.html';
  }, 2000);
});
