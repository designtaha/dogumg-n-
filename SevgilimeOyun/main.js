// index.html için mumları söndürme ve sayfa geçişi
if(document.getElementById('blowBtn')) {
  const blowBtn = document.getElementById('blowBtn');
  const candles = document.querySelectorAll('.candle .flame');

  blowBtn.addEventListener('click', () => {
    candles.forEach(flame => {
      flame.style.animation = 'none';
      flame.style.opacity = 0;
      flame.style.transition = 'opacity 1s';
    });
    blowBtn.disabled = true;

    document.body.style.transition = 'opacity 2s';
    document.body.style.opacity = 0;

    setTimeout(() => {
      window.location.href = 'game.html';
    }, 2000);
  });
}

// game.html için oyun ve popup işlemleri
if(document.getElementById('gameContainer')) {
  const gameContainer = document.getElementById('gameContainer');
  const player = document.getElementById('player');
  const popup = document.getElementById('popup');
  const popupTitle = document.getElementById('popupTitle');
  const photoContainer = document.getElementById('photoContainer');
  const closePopupBtn = document.getElementById('closePopupBtn');

  const cols = 4;
  const rows = 3;

  let posX = 0;
  let posY = 0;

  // Ev isimleri ve fotoğraflar
  const months = [
    {name:"Ocak", photos:["assets/img/ocak1.jpg","assets/img/ocak2.jpg","assets/img/ocak3.jpg"]},
    {name:"Şubat", photos:["assets/img/subat1.jpg","assets/img/subat2.jpg","assets/img/subat3.jpg"]},
    {name:"Mart", photos:["assets/img/mart1.jpg","assets/img/mart2.jpg","assets/img/mart3.jpg"]},
    {name:"Nisan", photos:["assets/img/nisan1.jpg","assets/img/nisan2.jpg","assets/img/nisan3.jpg"]},
    {name:"Mayıs", photos:["assets/img/mayis1.jpg","assets/img/mayis2.jpg","assets/img/mayis3.jpg"]},
    {name:"Haziran", photos:["assets/img/haziran1.jpg","assets/img/haziran2.jpg","assets/img/haziran3.jpg"]},
    {name:"Temmuz", photos:["assets/img/temmuz1.jpg","assets/img/temmuz2.jpg","assets/img/temmuz3.jpg"]},
    {name:"Ağustos", photos:["assets/img/agustos1.jpg","assets/img/agustos2.jpg","assets/img/agustos3.jpg"]},
    {name:"Eylül", photos:["assets/img/eylul1.jpg","assets/img/eylul2.jpg","assets/img/eylul3.jpg"]},
    {name:"Ekim", photos:["assets/img/ekim1.jpg","assets/img/ekim2.jpg","assets/img/ekim3.jpg"]},
    {name:"Kasım", photos:["assets/img/kasim1.jpg","assets/img/kasim2.jpg","assets/img/kasim3.jpg"]},
    {name:"Aralık", photos:["assets/img/aralik1.jpg","assets/img/aralik2.jpg","assets/img/aralik3.jpg"]}
  ];

  // Evleri oluştur
  months.forEach((month, i) => {
    const house = document.createElement('div');
    house.classList.add('house');
    house.textContent = month.name;
    house.dataset.index = i;
    gameContainer.appendChild(house);
  });

  // Player pozisyon ayar
  function updatePlayerPosition() {
    const house = gameContainer.children[posY * cols + posX];
    const rect = house.getBoundingClientRect();
    const containerRect = gameContainer.getBoundingClientRect();
    player.style.top = (rect.top - containerRect.top + gameContainer.scrollTop + 5) + 'px';
    player.style.left = (rect.left - containerRect.left + gameContainer.scrollLeft + 5) + 'px';
  }

  updatePlayerPosition();

  // Yön tuşlarıyla hareket
  window.addEventListener('keydown', (e) => {
    if(popup.classList.contains('hidden') === false) return; // popup açıksa engelle

    switch(e.key) {
      case 'ArrowUp':
        if(posY > 0) posY--;
        break;
      case 'ArrowDown':
        if(posY < rows - 1) posY++;
        break;
      case 'ArrowLeft':
        if(posX > 0) posX--;
        break;
      case 'ArrowRight':
        if(posX < cols - 1) posX++;
        break;
      case ' ':
        e.preventDefault();
        // Popup aç
        const currentHouse = months[posY * cols + posX];
        popupTitle.textContent = currentHouse.name;
        photoContainer.innerHTML = '';
        currentHouse.photos.forEach(src => {
          const img = document.createElement('img');
          img.src = src;
          photoContainer.appendChild(img);
        });
        popup.classList.remove('hidden');
        break;
    }
    updatePlayerPosition();
  });

  // Popup kapatma
  closePopupBtn.addEventListener('click', () => {
    popup.classList.add('hidden');
  });

  // focus game container for key events
  gameContainer.focus();
}
