<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8" />
  <title>Birinci yılımız kutlu olsun aşkım</title>
  <link rel="stylesheet" href="style.css" />
  <style>
    body {
      margin: 0;
      background: #f3f3f3;
      font-family: sans-serif;
      text-align: center;
    }

    .game-container {
      width: 600px;
      height: 600px;
      margin: 50px auto;
      background: #d0f0c0;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(3, 1fr);
      gap: 10px;
      position: relative;
      border: 5px solid #333;
    }

    .house {
      background: #ffcc70;
      border: 2px solid #996633;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      user-select: none;
    }

    .player {
      width: 40px;
      height: 40px;
      background: url('assets/img/player.png') no-repeat center center / contain;
      position: absolute;
      top: 0;
      left: 0;
      transition: 0.2s ease;
      z-index: 10;
    }

    .popup {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: white;
      padding: 20px;
      border-radius: 12px;
      box-shadow: 0 0 10px rgba(0,0,0,0.3);
      display: none;
      max-width: 90vw;
      max-height: 90vh;
      overflow-y: auto;
      text-align: left;
    }

    .popup h2 {
      margin-top: 0;
    }

    .close-btn {
      margin-top: 10px;
      background: #e75480;
      color: white;
      border: none;
      padding: 8px 12px;
      border-radius: 8px;
      cursor: pointer;
    }
  </style>
</head>
<body>

  <h1>🎉 12 Ayın Anısı 🎉</h1>
  <div class="game-container" id="gameContainer">
    <div class="house" data-month="Ocak">Ocak</div>
    <div class="house" data-month="Şubat">Şubat</div>
    <div class="house" data-month="Mart">Mart</div>
    <div class="house" data-month="Nisan">Nisan</div>
    <div class="house" data-month="Mayıs">Mayıs</div>
    <div class="house" data-month="Haziran">Haziran</div>
    <div class="house" data-month="Temmuz">Temmuz</div>
    <div class="house" data-month="Ağustos">Ağustos</div>
    <div class="house" data-month="Eylül">Eylül</div>
    <div class="house" data-month="Ekim">Ekim</div>
    <div class="house" data-month="Kasım">Kasım</div>
    <div class="house" data-month="Aralık">Aralık</div>
    <div class="player" id="player"></div>
  </div>

  <div class="popup" id="popup">
    <h2 id="popupTitle">Bu ayki anılar 💕</h2>
    <div id="popupContent">
      <p>Buraya seçilen aya ait fotoğraf ve anılar gelecek.</p>
    </div>
    <button class="close-btn" onclick="closePopup()">Kapat</button>
  </div>

  <script>
    const player = document.getElementById("player");
    const popup = document.getElementById("popup");
    const popupTitle = document.getElementById("popupTitle");
    const popupContent = document.getElementById("popupContent");

    const gridSize = 150;
    let x = 0;
    let y = 0;

    function updatePlayerPosition() {
      player.style.left = x * gridSize + "px";
      player.style.top = y * gridSize + "px";
    }

    function openPopup(month) {
      popupTitle.textContent = month + " Ayı Anıları 💕";

      // Burada farklı aylara özel fotoğraf ve içerik ekleyebilirsin.
      popupContent.innerHTML = `
        <p>${month} ayında çekilen güzel anılar burada gösterilecek.</p>
        <img src="assets/img/${month.toLowerCase()}.jpg" alt="${month} anıları" style="max-width:100%;border-radius:8px;" onerror="this.style.display='none'"/>
      `;

      popup.style.display = "block";
    }

    function closePopup() {
      popup.style.display = "none";
    }

    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight" && x < 3) x++;
      if (e.key === "ArrowLeft" && x > 0) x--;
      if (e.key === "ArrowDown" && y < 2) y++;
      if (e.key === "ArrowUp" && y > 0) y--;
      if (e.key === "Enter" || e.key === "e") {
        // Aktif evin ayını bul ve popup aç
        const houses = document.querySelectorAll(".house");
        const index = y * 4 + x;
        if (houses[index]) {
          openPopup(houses[index].dataset.month);
        }
      }
      updatePlayerPosition();
    });

    updatePlayerPosition();
  </script>
</body>
</html>
