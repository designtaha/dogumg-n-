// Mumları otomatik ekle
const candlesContainer = document.querySelector(".candles");
candlesContainer.innerHTML = ""; // önce varsa temizle

for (let i = 0; i < 4; i++) {
  const candle = document.createElement("div");
  candle.classList.add("candle");

  // Alev divi
  const flame = document.createElement("div");
  flame.classList.add("flame");
  candle.appendChild(flame);

  candlesContainer.appendChild(candle);
}

// Üfle fonksiyonu
function blowCandles() {
  const candles = document.querySelectorAll(".candle");
  candles.forEach(c => {
    c.style.animation = "blowOut 1s forwards";
    c.querySelector(".flame").style.animation = "flameOut 1s forwards";
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

// Mum sönme animasyonu ve alev animasyonları için CSS ekle
const style = document.createElement('style');
style.innerHTML = `
  @keyframes blowOut {
    0% { opacity: 1; transform: scaleY(1); }
    100% { opacity: 0; transform: scaleY(0.1); }
  }
  @keyframes flameFlicker {
    0%, 100% { opacity: 1; transform: translateY(0); }
    50% { opacity: 0.6; transform: translateY(-3px); }
  }
  @keyframes flameOut {
    0% { opacity: 1; transform: scale(1); }
    100% { opacity: 0; transform: scale(0); }
  }
`;
document.head.appendChild(style);
