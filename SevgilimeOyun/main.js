// Mumları otomatik ekle
const candlesContainer = document.querySelector(".candles");

for (let i = 0; i < 19; i++) {
  const candle = document.createElement("div");
  candle.classList.add("candle");
  candlesContainer.appendChild(candle);
}

// Üfle fonksiyonu
function blowCandles() {
  const candles = document.querySelectorAll(".candle");
  candles.forEach(c => {
    c.style.animation = "blowOut 1s forwards";
  });

  // Sayfa fade out
  document.body.style.transition = "opacity 2s";
  setTimeout(() => {
    document.body.style.opacity = 0;
  }, 1000);

  // Sayfa yönlendirme
  setTimeout(() => {
    window.location.href = "game.html";
  }, 3000);
}

// Mum sönme animasyonu
const style = document.createElement('style');
style.innerHTML = `
  @keyframes blowOut {
    0% { opacity: 1; transform: scaleY(1); }
    100% { opacity: 0; transform: scaleY(0.1); }
  }
`;
document.head.appendChild(style);