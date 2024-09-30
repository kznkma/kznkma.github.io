const coquetteTexts = [
    "DIGITAL ARTIST",
    "DESIGNER",
    "WRITER"
];

const darkModeTexts = [
    "DIGITAL ARTIST",
    "DESIGNER",
    "WRITER"
];

let texts = coquetteTexts; // Default to Coquette mode texts

let textIndex = 0;
let charIndex = 0;
let currentText = '';
let isDeleting = false;
const typeSpeed = 100; // Consistent typewriting speed
const deleteSpeed = 100;
const delayBetweenTexts = 1000;
let typewriterTimeout;

function typeWriter() {
    const typewriterElement = document.querySelector('.typewriter-text');
    
    if (isDeleting) {
        currentText = texts[textIndex].substring(0, charIndex--);
    } else {
        currentText = texts[textIndex].substring(0, charIndex++);
    }

    typewriterElement.textContent = currentText;

    if (!isDeleting && charIndex === texts[textIndex].length) {
        // Pause before starting to delete
        isDeleting = true;
        setTimeout(() => {
            typewriterTimeout = setTimeout(typeWriter, delayBetweenTexts);
        }, delayBetweenTexts);
    } else if (isDeleting && charIndex === 0) {
        // Move to the next text after deleting
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        charIndex = 0; // Reset charIndex for the new text
        typewriterTimeout = setTimeout(typeWriter, typeSpeed);
    } else {
        // Continue typing or deleting
        typewriterTimeout = setTimeout(typeWriter, isDeleting ? deleteSpeed : typeSpeed);
    }
}

function switchFont(theme) {
    const renTextElement = document.getElementById('ren-text');
    if (theme === 'coquette') {
        renTextElement.style.fontFamily = 'Pacifico, cursive';
    } else if (theme === 'dark') {
        renTextElement.style.fontFamily = 'Palanquin Dark, sans-serif';
    }
}

function switchLogoFont(theme) {
    const logoElement = document.getElementById('logo');
    if (theme === 'coquette') {
        logoElement.style.fontFamily = 'Allura, cursive';
    } else if (theme === 'dark') {
        logoElement.style.fontFamily = 'Permanent Marker, cursive';
    }
}

function switchParagraphFont(theme) {
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(paragraph => {
        if (theme === 'coquette') {
            paragraph.style.fontFamily = 'Just Me Again Down Here, cursive';
        } else if (theme === 'dark') {
            paragraph.style.fontFamily = 'Bentham, serif';
        }
    });
}

// Example function to switch themes
function switchTheme(theme) {
    if (theme === 'coquette') {
        // Apply coquette theme styles
        document.body.classList.add('coquette-theme');
        document.body.classList.remove('dark-theme');
        texts = coquetteTexts;
        coquetteFontsLink.disabled = false;
        darkThemeFontsLink.disabled = true;
    } else if (theme === 'dark') {
        // Apply dark theme styles
        document.body.classList.add('dark-theme');
        document.body.classList.remove('coquette-theme');
        texts = darkModeTexts;
        coquetteFontsLink.disabled = true;
        darkThemeFontsLink.disabled = false;
    }
    // Switch the font based on the theme
    switchFont(theme);
    switchLogoFont(theme);
    switchParagraphFont(theme);
    // Restart the typewriter effect with the new texts
    clearTimeout(typewriterTimeout);
    textIndex = 0;
    charIndex = 0;
    isDeleting = false;
    typeWriter();
}

// Start the typewriter effect
typeWriter();

document.addEventListener('DOMContentLoaded', () => {
    // Check the current theme and set the texts and fonts accordingly
    if (document.body.classList.contains('dark-mode')) {
        texts = darkModeTexts;
        coquetteFontsLink.disabled = true;
        darkThemeFontsLink.disabled = false;
        switchFont('dark');
        switchLogoFont('dark');
        switchParagraphFont('dark');
    } else {
        texts = coquetteTexts;
        coquetteFontsLink.disabled = false;
        darkThemeFontsLink.disabled = true;
        switchFont('coquette');
        switchLogoFont('coquette');
        switchParagraphFont('coquette');
    }
    typeWriter();
});

const themeSwitcher = document.getElementById('theme-switcher');
const themeSwitcherImg = themeSwitcher.querySelector('img');
const coquetteFontsLink = document.getElementById('coquette-fonts');
const darkThemeFontsLink = document.getElementById('dark-theme-fonts');

themeSwitcher.addEventListener('click', () => {
    if (document.body.classList.contains('coquette-mode')) {
        themeSwitcher.classList.add('rotating-dark');
        setTimeout(() => {
            themeSwitcher.classList.remove('rotating-dark');
        }, 1000); // Duration of the animation in milliseconds

        document.body.classList.remove('coquette-mode');
        document.body.classList.add('dark-mode');
        
        // Disable Coquette fonts
        coquetteFontsLink.disabled = true;
        darkThemeFontsLink.disabled = false;
        
        // Change the image to dark.png
        themeSwitcherImg.src = 'dark.png';
        themeSwitcherImg.alt = 'Switch to Coquette Theme';
        
        // Update typewriter texts and font
        switchTheme('dark');
    } else {
        themeSwitcher.classList.add('rotating-coquette');
        setTimeout(() => {
            themeSwitcher.classList.remove('rotating-coquette');
        }, 1000); // Duration of the animation in milliseconds

        document.body.classList.remove('dark-mode');
        document.body.classList.add('coquette-mode');
        
        // Enable Coquette fonts
        coquetteFontsLink.disabled = false;
        darkThemeFontsLink.disabled = true;
        
        // Change the image to coquette.png
        themeSwitcherImg.src = 'coquette.png';
        themeSwitcherImg.alt = 'Switch to Dark Theme';
        
        // Update typewriter texts and font
        switchTheme('coquette');
    }
});

const hireMeBtn = document.getElementById('hire-me-btn');
const popupBox = document.getElementById('popup-box');

hireMeBtn.addEventListener('click', () => {
    popupBox.style.display = 'block';
    popupBox.classList.add('show');
    popupBox.classList.remove('hide');
    popupBox.classList.add('glow');
});

const closeBtn = document.getElementById('close-btn');

closeBtn.addEventListener('click', () => {
    popupBox.classList.add('hide');
    popupBox.classList.remove('glow');
    popupBox.classList.remove('show');
    setTimeout(() => {
        popupBox.style.display = 'none';
    }, 100); // Match the duration of the fade-out animation
});