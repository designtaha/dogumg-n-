// Sayfayı tanıma
const isIndex = window.location.pathname.includes("index.html") || window.location.pathname.endsWith("/");
const isGame = window.location.pathname.includes("game.html");

// ----------- index.html için ----------- 
if (isIndex) {
  const candlesContainer = document.querySelector(".candles");
  const blowBtn = document.getElementById("blowBtn");

  // 19 mum oluştur
  for (let i = 0; i < 19; i++) {
    const candle = document.createElement("div");
    candle.classList.add("candle");

    // Mumun üstüne alev ekle
    const flame = document.createElement("div");
    flame.classList.add("flame");
    candle.appendChild(flame);

    candlesContainer.appendChild(candle);
  }

  // Üfle butonuna basınca mumları söndür ve 3 saniye sonra game.html’e git
  blowBtn.addEventListener("click", () => {
    const candles = document.querySelectorAll(".candle");
    candles.forEach(candle => {
      candle.classList.add("blowOut");
    });

    document.body.style.transition = "opacity 2s";
    document.body.style.opacity = 0;

    setTimeout(() => {
      window.location.href = "game.html";
    }, 3000);
  });
}

// ----------- game.html için -----------

if (isGame) {
  const player = document.getElementById("player");
  const popup = document.getElementById("popup");

  const gridSize = 150; // Oyun alanındaki hücre boyutu
  let x = 0;
  let y = 0;

  function updatePlayerPosition() {
    player.style.left = x * gridSize + "px";
    player.style.top = y * gridSize + "px";
  }

  function openPopup() {
    popup.style.display = "block";
  }

  window.closePopup = function() {
    popup.style.display = "none";
  };

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" && x < 3) x++;
    if (e.key === "ArrowLeft" && x > 0) x--;
    if (e.key === "ArrowDown" && y < 2) y++;
    if (e.key === "ArrowUp" && y > 0) y--;
    if (e.key === "Enter" || e.key === "e") openPopup();

    updatePlayerPosition();
  });

  updatePlayerPosition();
}
