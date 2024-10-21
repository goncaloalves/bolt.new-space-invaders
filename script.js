const player = document.getElementById('player');
    const invadersContainer = document.getElementById('invaders');

    const invaderCount = 10;
    const invaders = [];

    function createInvaders() {
      for (let i = 0; i < invaderCount; i++) {
        const invader = document.createElement('div');
        invader.classList.add('invader');
        invadersContainer.appendChild(invader);
        invaders.push(invader);
      }
    }

    function movePlayer(event) {
      const playerRect = player.getBoundingClientRect();
      if (event.key === 'ArrowLeft' && playerRect.left > 0) {
        player.style.left = playerRect.left - 10 + 'px';
      } else if (event.key === 'ArrowRight' && playerRect.right < window.innerWidth) {
        player.style.left = playerRect.left + 10 + 'px';
      }
    }

    function init() {
      createInvaders();
      window.addEventListener('keydown', movePlayer);
    }

    init();
