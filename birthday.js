document.getElementById('animateButton').addEventListener('click', function() {
    const image = document.querySelector('.animated-image');
    image.style.transform = 'rotate(360deg)';
    image.addEventListener('transitionend', () => {
      image.style.animation = 'bounce 2s';
    });
  
    const balloons = document.querySelectorAll('.balloon');
    balloons.forEach(balloon => {
      balloon.style.animationPlayState = 'running';
    });
  });
  