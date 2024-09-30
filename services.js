const coquetteTexts = ["Terms of Services!"];
const darkModeTexts = ["TERMS OF SERVICES!"];
let texts = coquetteTexts;

let textIndex = 0;
let charIndex = 0;
const typeSpeed = 100; // Speed for typing
const deleteSpeed = 50; // Speed for deleting
const delayBetween = 1000; // Delay between typing and deleting
let typewriterTimeout;
let isDeleting = false;

const themeSwitcher = document.getElementById('theme-switcher');
const body = document.body;
const typewriterText = document.querySelector('.typewriter-text');

document.addEventListener("DOMContentLoaded", function() {
    function makeTableScrollable() {
        const tableContainer = document.querySelector('.table-container');
        if (tableContainer) {
            tableContainer.style.maxHeight = '400px'; // Set the desired max height
            tableContainer.style.overflowY = 'auto'; // Enable vertical scrolling
        }
    }

    makeTableScrollable();
    window.addEventListener('resize', makeTableScrollable); // Adjust on window resize
});

document.addEventListener("DOMContentLoaded", function() {
    AOS.init({
        offset: 0, // Trigger animations as soon as the element is in the viewport
        duration: 1500, // Duration of the animations
        easing: 'ease-in-out', // Easing function for the animations
        once: true, // Whether animation should happen only once - while scrolling down
        startEvent: 'DOMContentLoaded' // Trigger animations on DOMContentLoaded
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a[href^="#"]');

    for (const link of links) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
});

// Function to switch themes
function switchTheme() {
    if (body.classList.contains('coquette-mode')) {
        themeSwitcher.classList.add('rotating-dark');
        setTimeout(() => {
            themeSwitcher.classList.remove('rotating-dark');
        }, 1000); // Duration of the animation in milliseconds

        body.classList.remove('coquette-mode');
        body.classList.add('dark-mode');
        themeSwitcher.innerHTML = '<img src="dark.png" alt="Switch to Coquette Theme">';
        texts = darkModeTexts;
    } else {
        themeSwitcher.classList.add('rotating-coquette');
        setTimeout(() => {
            themeSwitcher.classList.remove('rotating-coquette');
        }, 1000); // Duration of the animation in milliseconds

        body.classList.remove('dark-mode');
        body.classList.add('coquette-mode');
        themeSwitcher.innerHTML = '<img src="coquette.png" alt="Switch to Dark Theme">';
        texts = coquetteTexts;
    }

    // Restart typewriter effect with new text
    clearTimeout(typewriterTimeout);
    textIndex = 0;
    charIndex = 0;
    isDeleting = false;
    typewriterText.innerHTML = ''; // Clear previous text
    typeWriter();
}

// Typewriter effect function
function typeWriter() {
    clearTimeout(typewriterTimeout); // Clear any existing timeout

    const currentText = texts[textIndex];
    if (isDeleting) {
        typewriterText.innerHTML = currentText.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typewriterTimeout = setTimeout(typeWriter, delayBetween);
        } else {
            typewriterTimeout = setTimeout(typeWriter, deleteSpeed);
        }
    } else {
        typewriterText.innerHTML = currentText.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentText.length) {
            isDeleting = true;
            typewriterTimeout = setTimeout(typeWriter, delayBetween);
        } else {
            typewriterTimeout = setTimeout(typeWriter, typeSpeed);
        }
    }
}

// Initialize typewriter effect
document.addEventListener('DOMContentLoaded', () => {
    typeWriter();
});

// Add event listener to the theme switcher button
themeSwitcher.addEventListener('click', switchTheme);