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

    // Sayfa op
