export function initializeStartMenu() {
  const startBtn = document.querySelector('.start-btn');
  const menuContent = document.querySelector('.menu-content');
  const menuItems = document.querySelectorAll('.menu-item');
  const sleepScreen = document.querySelector('.sleep-screen');
  const taskbarItems = document.querySelector('.taskbar-items');

  startBtn.addEventListener('click', () => {
    menuContent.classList.toggle('active');
  });

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      const action = item.dataset.action;
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
          window.location.href = 'login.html';
          break;
          case 'restart':
           // document.body.classList.add('restart-animation');
            setTimeout(() => {
              window.location.reload();
            }, 100);
            break;
        }
      });
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
