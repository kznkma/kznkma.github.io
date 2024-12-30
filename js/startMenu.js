export function initializeStartMenu() {
  const startBtn = document.querySelector('.start-btn');
  const menuContent = document.querySelector('.menu-content');
  const menuItems = document.querySelectorAll('.menu-item');
  const sleepScreen = document.querySelector('.sleep-screen');
  const taskbarItems = document.querySelector('.taskbar-items');

  function toggleMenu() {
    menuContent.classList.toggle('active');
  }

  function handleMenuItemClick(event) {
    const action = event.target.dataset.action;
    menuContent.classList.remove('active');

    switch (action) {
      case 'sleep':
        sleepScreen.classList.remove('hidden');
        const handleWakeClick = () => {
          sleepScreen.removeEventListener('click', handleWakeClick);
          setTimeout(() => {
            sleepScreen.classList.add('hidden');
          }, 100);
        };
        sleepScreen.addEventListener('click', handleWakeClick);
        break;
      case 'shutdown':
        window.location.href = 'index.html';
        break;
      case 'restart':
        const elements = document.querySelectorAll('body *:not(.start-menu-icon)');
        const windows = document.querySelectorAll('.window');
        const taskbarItems = document.querySelectorAll('.taskbar-item');

        windows.forEach(window => {
          window.classList.add('pinch-collapse');
          setTimeout(() => {
            window.remove();
          }, 500); 
        });

        taskbarItems.forEach(item => {
          item.classList.add('fade-out');
          setTimeout(() => {
            item.remove();
          }, 500); 
        });

        elements.forEach(element => {
          element.style.animation = 'fadeOut 0.5s forwards';
        });

        setTimeout(() => {
          elements.forEach(element => {
            element.style.animation = 'fadeIn 0.5s forwards';
            setTimeout(() => {
              element.style.animation = '';
            }, 500); 
          });
          reinitializeStartMenu();
        }, 500);
        break;
    }
  }

  function reinitializeStartMenu() {
    startBtn.removeEventListener('click', toggleMenu);
    startBtn.addEventListener('click', toggleMenu);

    menuItems.forEach(item => {
      item.removeEventListener('click', handleMenuItemClick);
      item.addEventListener('click', handleMenuItemClick);
    });
  }

  startBtn.addEventListener('click', toggleMenu);
  menuItems.forEach(item => {
    item.addEventListener('click', handleMenuItemClick);
  });

  initializeClock();
}

function initializeClock() {
  const clockElement = document.querySelector('.clock');
  if (!clockElement) return;

  function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString(undefined, options);

    clockElement.innerHTML = `${dateString} || ${timeString}`;
  }

  updateClock();
  setInterval(updateClock, 1000);
}
