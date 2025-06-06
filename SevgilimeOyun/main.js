const blowBtn = document.getElementById('blowBtn');
const flames = document.querySelectorAll('.flame');

blowBtn.addEventListener('click', () => {
  flames.forEach(flame => {
    flame.style.animation = 'none';
    flame.style.opacity = '0';
    flame.style.transition = 'opacity 1.5s ease';
  });

  blowBtn.disabled = true;

  setTimeout(() => {
    window.location.href = 'game.html';
  }, 2000);
});
