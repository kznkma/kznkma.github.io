function openLightbox(img) {
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = img.src;
    lightbox.style.display = 'block';
    setTimeout(function() {
        lightbox.classList.add('show');
    }, 10);
}

function closeLightbox() {
    var lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('show');
    setTimeout(function() {
        lightbox.style.display = 'none';
    }, 300); // Match the transition duration
}

// Theme switcher functionality
document.getElementById('theme-switcher').addEventListener('click', function() {
    var body = document.getElementById('body');
    var themeSwitcher = document.getElementById('theme-switcher');
    var themeImage = themeSwitcher.querySelector('img');

    if (body.classList.contains('coquette-mode')) {
        body.classList.remove('coquette-mode');
        body.classList.add('dark-mode');
        themeImage.src = 'dark.png'; // Change to dark theme icon
        themeSwitcher.classList.add('rotating-dark');
        setTimeout(function() {
            themeSwitcher.classList.remove('rotating-dark');
        }, 1000); // Match the rotation animation duration
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('coquette-mode');
        themeImage.src = 'coquette.png'; // Change to coquette theme icon
        themeSwitcher.classList.add('rotating-coquette');
        setTimeout(function() {
            themeSwitcher.classList.remove('rotating-coquette');
        }, 1000); // Match the rotation animation duration
    }
});