// Mumları otomatik ekleme kodu kaldırıldı

// Üfle fonksiyonu (alev animasyonu + sayfa geçiş)
function blowCandles() {
  const flames = document.querySelectorAll(".flame");
  flames.forEach((flame, i) => {
    setTimeout(() => {
      flame.style.animation = "blowOut 0.5s forwards";
      flame.style.opacity = 0;
      flame.style.transform = "translateX(-50%) translateY(-10px) scale(0)";
      flame.style.filter = "drop-shadow(0 0 0 transparent)";
    }, i * 200);
  });

  const candles = document.querySelectorAll(".candle");
  candles.forEach((candle) => {
    candle.style.boxShadow = "none";
  });

  setTimeout(() => {
    document.body.style.transition = "opacity 2s";
    document.body.style.opacity = 0;
  }, 1200);

  setTimeout(() => {
    window.location.href = "game.html";
  }, 3200);
}
