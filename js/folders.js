const folderContents = {
  services: `
    <div class="services-content">
      <div class="status-header">
        <h2>Status: OPEN</h2>
        <p>Available Slots: 5</p>
      </div>
      <div class="service-item">
        <strong style="font-size: larger;">COMMISSION USE</strong><br>
        Personal & Commercial
      </div>
      <div class="service-item">
        <strong style="font-size: larger;">WILL DRAW</strong><br>
        Real people, Fanarts, Anime, Own/Original Characters, Ships, Fashion Art, Couple/Ship, Animals (Simplified), NSFW/Pornographic Content
      </div>
      <div class="service-item">
        <strong style="font-size: larger;">WILL NOT DRAW</strong><br>
        Furries, Mecha, Heavy gore, Violence, Horror, Cityscape, Hate art, Complex Background, Complicated Designs, Medieval-related (armors, etc.), Old People
      </div>
      <div class="service-item">
        <strong style="font-size: larger;">AGREEMENT</strong><br>
        State that by commissioning you, the client agrees to your Terms of Service.
      </div>
    </div>
  `,
  gallery: `
  <div class="subfolder-container">
    <div class="folder" data-folder="gallery1">
      <img src="assets/folder1.png" alt="Gallery 1">
      <span>Gallery 1: Simple Illustration</span>
    </div>
    <div class="folder" data-folder="gallery2">
      <img src="assets/folder2.png" alt="Gallery 2">
      <span>Gallery 2: Semi-Realism</span>
    </div>
    <div class="folder" data-folder="gallery3">
      <img src="assets/folder3.png" alt="Gallery 3">
      <span>Gallery 3: Scenery</span>
    </div>
    <div class="folder" data-folder="gallery4">
      <img src="assets/folder4.png" alt="Gallery 4">
      <span>Gallery 4: Graphic Design</span>
    </div>
  </div>
`,
gallery1: `
<div class="gallery-content">
  ${[
    'assets/gallery/style 1/barbie.png',
    'assets/gallery/style 1/cinnamoroll.png',
    'assets/gallery/style 1/futaba.png',
    'assets/gallery/style 1/Illustration2.png',
    'assets/gallery/style 1/Illustration7.png',
    'assets/gallery/style 1/Illustration12.png',
    'assets/gallery/style 1/pancake girl.png',
    'assets/gallery/style 1/spidersona.png',
    'assets/gallery/style 1/sunflower.png'
  ].map((src, i) => `
    <div class="gallery-item">
      <img src="${src}" alt="Gallery 1 image ${i + 1}">
    </div>
  `).join('')}
</div>
`,
gallery2: `
<div class="gallery-content">
  ${[
    'assets/gallery/style 2/2B.png',
    'assets/gallery/style 2/angel.png',
    'assets/gallery/style 2/goth girl.png',
    'assets/gallery/style 2/Group 4 - Art and Science.png',
    'assets/gallery/style 2/happy birthday kenma.png',
    'assets/gallery/style 2/hbd kuroo.png',
    'assets/gallery/style 2/icon ren.png',
    'assets/gallery/style 2/kenma drummer.png',
    'assets/gallery/style 2/kenma smoking.png',
    'assets/gallery/style 2/kenma with cat.png',
    'assets/gallery/style 2/kuroken heart.png',
    'assets/gallery/style 2/kuroken smoke.png',
    'assets/gallery/style 2/kuroo 1.png',
    'assets/gallery/style 2/kuroo cat.png',
    'assets/gallery/style 2/kuroo guitar.png',
    'assets/gallery/style 2/kuroo ref.png',
    'assets/gallery/style 2/self portrait.png',
    'assets/gallery/style 2/statue.png',
  ].map((src, i) => `
    <div class="gallery-item">
      <img src="${src}" alt="Gallery 2 image ${i + 1}">
    </div>
  `).join('')}
</div>
  `,
  gallery3: `
    <div class="gallery-content">
      ${[
        'assets/gallery/style 3/dune.jpg',
        'assets/gallery/style 3/generick.png',
        'assets/gallery/style 3/haha.jpg',
        'assets/gallery/style 3/kuroken kiss.png',
        'assets/gallery/style 3/monitor.png',
        'assets/gallery/style 3/scenery.jpg',
        'assets/gallery/style 3/sky.jpg',
        'assets/gallery/style 3/waves.jpg',
        'assets/gallery/style 3/wow.jpg'
      ].map((src, i) => `
        <div class="gallery-item">
          <img src="${src}" alt="Gallery 3 image ${i + 1}">
        </div>
      `).join('')}
    </div>
  `,
  gallery4: `
    <div class="gallery-content">
      ${[
        'assets/gallery/style 4/1.1.png',
        'assets/gallery/style 4/1.png',
        'assets/gallery/style 4/002.png',
        'assets/gallery/style 4/5.png',
        'assets/gallery/style 4/Badminton Tournament.png',
        'assets/gallery/style 4/Basketball Tournament.png',
        'assets/gallery/style 4/Brown Green Playful Illustration Cooking Tips Poster.png',
        'assets/gallery/style 4/CHESS COMPETITION.png',
        'assets/gallery/style 4/CHESS eye spy.png',
        'assets/gallery/style 4/rompro01.png',
        'assets/gallery/style 4/rompro02.png',
        'assets/gallery/style 4/rompro03.png',
        'assets/gallery/style 4/Thumbnail 1.png',
        'assets/gallery/style 4/Thumbnail 2.png',
        'assets/gallery/style 4/Thumbnail 3.png',
        'assets/gallery/style 4/Volleyball Tournament.png',
        'assets/gallery/style 4/E-Sports Tournament.png'
      ].map((src, i) => `
        <div class="gallery-item">
          <img src="${src}" alt="Gallery 4 image ${i + 1}">
        </div>
      `).join('')}
    </div>
  `,
  conditions: `
    <div class="conditions-content">
      <div class="condition-item">
        <strong style="font-size: larger;">REFERENCE AND CONCEPT</strong><br>
        ★ I use 3D Poser to reference models for your concept.<br>
        ★ Share a detailed idea, including specifications, references, colors, and props. I strongly suggest sending visual references.
      </div>
      <div class="condition-item">
        <strong style="font-size: larger;">SKETCH APPROVAL</strong><br>
        ★ I'll send a rough sketch for your approval.<br>
        ★ Once approved, cancellations are not allowed.
      </div>
      <div class="condition-item">
        <strong style="font-size: larger;">COMMISSION ACCEPTANCE</strong><br>
        ★ Provide your name and email upon accepting the commission.
      </div>
      <div class="condition-item">
        <strong style="font-size: larger;">TURNAROUND TIME</strong><br>
        ★ Expect a 1 to 2-week turnaround, depending on my schedule. Rush pieces will be charged for 2$.<br>
        ★ Delays due to emergencies or unforeseen circumstances will be communicated to you.
      </div>
      <div class="condition-item">
        <strong style="font-size: larger;">REVISION AND USAGE</strong><br>
        ★ Strictly no refunds.<br>
        ★ Feel free to ask for updates anytime.<br>
        ★ Minor revisions are free of charge.
      </div>
      <div class="condition-item">
        <strong style="font-size: larger;">DELIVERY AND SOCIAL MEDIA</strong><br>
        ★ Finished pieces sent through Google Drive/Email/DMs.<br>
        ★ I reserve the right to post on social media with proper credit.<br>
        ★ If you don’t want the commission posted, let me know in advance.
      </div>
      <div class="condition-item">
        <strong style="font-size: larger;">CLIENT RESPONSIBILITIES</strong><br>
        ★ Remind clients to check their inboxes for updates and approvals.
      </div>
      <div class="condition-item">
        <strong style="font-size: larger;">CLIENT PREFERENCES</strong><br>
        ★ You can decline posting on social media.<br>
        ★ I may decline a commission for various reasons:<br>
        1. Commission slots are full<br>
        2. I find the commission piece uncomfortable to do<br>
        3. The commission piece is beyond my art skills<br>
        4. Rude Behavior
      </div>
      <div class="condition-item">
        <strong style="font-size: larger;">OWNERSHIP AND COPYRIGHT</strong><br>
        ★ I retain all rights to the artwork, including the right to post or use it for promotional purposes (unless confidentiality is requested).<br>
        ★ Commissions for personal use cannot be resold or used commercially.<br>
        ★ Commissions for commercial use may have additional charges—please specify if this is your intention.<br>
        ★ You cannot alter, redistribute, or claim the artwork as your own without permission.
      </div>
    </div>
  `,
  payment: `
    <div style="padding: 20px;">
      <h2 class="payment-methods-title">PAYMENT METHODS</h2>
      <p>The following terms apply...</p>
      <div style="padding: 20px;">
        <p><strong style="font-size: larger;">PAYMENT</strong></p>
        <p>★ Accepted payment methods: PayPal (international) and GCash (local).</p>
        <p>★ Payment is required upfront in USD or PHP (no cryptocurrencies). Work begins once payment is received.</p>
        <p>★ Payment details will be shared privately after securing your slot.</p>
        <p>★ Commissions require a 50% upfront deposit, with proof of payment provided.</p>
        <p>★ Slot reservations are valid for 5 days only.</p>
        <p><strong style="font-size: larger;">ADDITIONAL FEES</strong></p>
        <p>★ Charges apply for:</p>
        <p>A.) Additional characters</p>
        <p>B.) Major revisions after the final piece is delivered</p>
        <p>C.) Extra changes, starting at $1 or 50 PHP per adjustment</p>
      </div>
    </div>
  `,
  ratings: `
    <div style="padding: 20px;">
      ${Array(5).fill().map((_, i) => `
        <div style="margin-bottom: 20px; padding: 15px; background: var(--primary-red); border-radius: 8px;">
          <div style="display: flex; gap: 10px; margin-bottom: 10px;">
            <img src="https://picsum.photos/50?random=${i}" alt="User ${i + 1}" style="border-radius: 25px;">
            <div>
              <h3>User ${i + 1}</h3>
              <p>Great experience! Would recommend.</p>
            </div>
          </div>
          <div style="text-align: center;">
            ${'★'.repeat(5 - i)}${'☆'.repeat(i)}
          </div>
        </div>
      `).join('')}
    </div>
  `,
  contact: `
    <div class="notepad-content">
      <h2 class="contact-title">Contact Information</h2>
      <ul class="social-links">
        <li><a href="https://www.facebook.com/profile.php?id=61561673905668" target="_blank"><img src="assets/icons/fb.png" alt="Facebook"> Facebook</a></li>
        <li><a href="https://x.com/kznkma" target="_blank"><img src="assets/icons/twt.png" alt="Twitter"> Twitter</a></li>
        <li><a href="https://www.tiktok.com/@kznkma" target="_blank"><img src="assets/icons/tiktok.png" alt="TikTok"> TikTok</a></li>
        <li><a href="https://ko-fi.com/kznkma" target="_blank"><img src="assets/icons/kofi.png" alt="Ko-Fi"> Ko-Fi</a></li>
        <li><a href="https://github.com/kznkma" target="_blank"><img src="assets/icons/github.png" alt="Github"> Github</a></li>
      </ul>
    </div>
  `,
};

function initializeFolders() {
  const folders = document.querySelectorAll('.folder');
  const desktop = document.querySelector('.desktop');
  const taskbarItems = document.querySelector('.taskbar-items');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeLightbox = document.querySelector('.close-lightbox');

  folders.forEach(folder => {
    folder.addEventListener('click', () => {
      const folderType = folder.dataset.folder;
      openFolder(folderType, folder);
    });
  });

  function openFolder(folderType, folder) {
    const existingWindow = desktop.querySelector(`.window[data-folder="${folderType}"]`);

    if (existingWindow) {
      if (existingWindow.classList.contains('hidden')) {
        existingWindow.classList.remove('hidden');
        existingWindow.classList.remove('pinch-collapse');
        existingWindow.classList.add('pinch-expand');
      } else {
        existingWindow.classList.remove('pinch-expand');
        existingWindow.classList.add('pinch-collapse');
        setTimeout(() => existingWindow.classList.add('hidden'), 500);
      }
      return;
    }

    const folderWindow = document.createElement('div');
    folderWindow.classList.add('window', 'active', 'pinch-expand');
    folderWindow.dataset.folder = folderType;

    if (folderType.startsWith('gallery')) {
      folderWindow.classList.add('gallery-window');
    } else if (folderType === 'contact') {
      folderWindow.classList.add('contacts-window');
    }
    folderWindow.innerHTML = `
    <div class="window-header">
      <span class="window-title">${folder.querySelector('span').textContent}</span>
      <button class="close-btn"></button>
    </div>
    <div class="window-content">${folderContents[folderType]}</div>
  `;
    desktop.appendChild(folderWindow);

    const centerX = (window.innerWidth - folderWindow.offsetWidth) / 2;
    const centerY = (window.innerHeight - folderWindow.offsetHeight) / 2;
    folderWindow.style.left = `${centerX}px`;
    folderWindow.style.top = `${centerY}px`;

    const hasBeenDragged = makeDraggable(folderWindow); 

    const closeBtn = folderWindow.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
      closeFolderWindow(folderWindow, folderType, hasBeenDragged);
    });

    closeBtn.addEventListener('touchstart', (e) => {
      e.preventDefault(); 
      closeFolderWindow(folderWindow, folderType, hasBeenDragged);
    });

    addTaskbarItem(folderType, folder.querySelector('span').textContent, folder.querySelector('img').src);

    if (folderType.startsWith('gallery')) {
      const galleryItems = folderWindow.querySelectorAll('.gallery-item img');
      galleryItems.forEach(item => {
        item.addEventListener('click', () => {
          lightboxImg.src = item.src;
          lightbox.classList.add('show');
        });
      });

      // Add event listeners for subfolders
      const subfolders = folderWindow.querySelectorAll('.folder');
      subfolders.forEach(subfolder => {
        subfolder.addEventListener('click', () => {
          const subfolderType = subfolder.dataset.folder;
          openFolder(subfolderType, subfolder);
        });
      });
    }
  }

  function closeFolderWindow(folderWindow, folderType, hasBeenDragged) {
    if (!hasBeenDragged()) {
      // Center the window for the closing animation if not dragged
      const centerX = (window.innerWidth - folderWindow.offsetWidth) / 2;
      const centerY = (window.innerHeight - folderWindow.offsetHeight) / 2;
      folderWindow.style.left = `${centerX}px`;
      folderWindow.style.top = `${centerY}px`;
    }
  
    folderWindow.classList.remove('pinch-expand');
    folderWindow.classList.add('pinch-collapse');
    setTimeout(() => {
      folderWindow.remove();
      removeTaskbarItem(folderType);
    }, 500);
  }

  function addTaskbarItem(folderType, folderName, iconSrc) {
    let taskbarItem = taskbarItems.querySelector(`.taskbar-item[data-folder="${folderType}"]`);
    if (!taskbarItem) {
      taskbarItem = document.createElement('div');
      taskbarItem.classList.add('taskbar-item', 'fade-in');
      taskbarItem.dataset.folder = folderType;
      taskbarItem.innerHTML = `<img src="${iconSrc}" alt="${folderName} icon"> ${folderName}`;
      taskbarItems.appendChild(taskbarItem);

      taskbarItem.addEventListener('click', () => {
        const folderWindow = desktop.querySelector(`.window[data-folder="${folderType}"]`);
        if (folderWindow) {
          if (folderWindow.classList.contains('hidden')) {
            folderWindow.classList.remove('hidden');
            folderWindow.classList.remove('pinch-collapse');
            folderWindow.classList.add('pinch-expand');
          } else {
            folderWindow.classList.remove('pinch-expand');
            folderWindow.classList.add('pinch-collapse');
            setTimeout(() => folderWindow.classList.add('hidden'), 500);
          }
        }
      });
    }
  }

  function removeTaskbarItem(folderType) {
    const taskbarItem = taskbarItems.querySelector(`.taskbar-item[data-folder="${folderType}"]`);
    if (taskbarItem) {
      taskbarItem.classList.add('fade-out');
      setTimeout(() => {
        taskbarItem.remove();
      }, 500);
    }
  }

  closeLightbox.addEventListener('click', () => {
    lightbox.classList.remove('show');
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
      lightbox.classList.remove('show');
    }
  });
  
  function makeDraggable(element) {
    let isDragging = false;
    let offsetX, offsetY;
    let hasBeenDragged = false;
  
    const header = element.querySelector('.window-header');
  
    header.addEventListener('mousedown', (e) => {
      e.preventDefault();
      offsetX = e.clientX - element.offsetLeft;
      offsetY = e.clientY - element.offsetTop;
      isDragging = true;
      window.addEventListener('mousemove', drag);
      window.addEventListener('mouseup', stopDrag);
    });
  
    header.addEventListener('touchstart', (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      offsetX = touch.clientX - element.offsetLeft;
      offsetY = touch.clientY - element.offsetTop;
      isDragging = true;
      window.addEventListener('touchmove', drag);
      window.addEventListener('touchend', stopDrag);
    });
  
    function drag(e) {
      if (!isDragging) return;
      const clientX = e.clientX || e.touches[0].clientX;
      const clientY = e.clientY || e.touches[0].clientY;
      element.style.left = `${clientX - offsetX}px`;
      element.style.top = `${clientY - offsetY}px`;
      hasBeenDragged = true;
    }
  
    function stopDrag() {
      isDragging = false;
      window.removeEventListener('mousemove', drag);
      window.removeEventListener('mouseup', stopDrag);
      window.removeEventListener('touchmove', drag);
      window.removeEventListener('touchend', stopDrag);
    }
  
    return () => hasBeenDragged;
  }
}

export { initializeFolders };
