document.addEventListener("DOMContentLoaded", function() {
    const coquetteText = "Let's Connect!";
    const darkText = "LET'S CONNECT!";
    let text = coquetteText; // Default text
    let charIndex = 0;
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const delayBetween = 1000;
    let typewriterTimeout;
    let isDeleting = false;
    const typewriterText = document.querySelector('.typewriter-text');

    if (!typewriterText) {
        console.error('Element with class "typewriter-text" not found.');
        return;
    }

    function typeWriter() {
        clearTimeout(typewriterTimeout);
        if (isDeleting) {
            typewriterText.innerHTML = text.substring(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                isDeleting = false;
                typewriterTimeout = setTimeout(typeWriter, delayBetween);
            } else {
                typewriterTimeout = setTimeout(typeWriter, deleteSpeed);
            }
        } else {
            typewriterText.innerHTML = text.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex === text.length) {
                isDeleting = true;
                typewriterTimeout = setTimeout(typeWriter, delayBetween);
            } else {
                typewriterTimeout = setTimeout(typeWriter, typeSpeed);
            }
        }
    }

    // Initialize typewriter effect
    console.log('Starting typewriter effect for text:', text);
    typeWriter();

    // Theme switcher logic
    const themeSwitcher = document.getElementById('theme-switcher');
    const body = document.body;

    function switchTheme() {
        if (body.classList.contains('coquette-mode')) {
            themeSwitcher.classList.add('rotating-dark');
            setTimeout(() => {
                themeSwitcher.classList.remove('rotating-dark');
            }, 1000); // Duration of the animation in milliseconds

            body.classList.remove('coquette-mode');
            body.classList.add('dark-mode');
            themeSwitcher.innerHTML = '<img src="dark.png" alt="Switch to Coquette Theme">';
            text = darkText; // Update text for dark mode
        } else {
            themeSwitcher.classList.add('rotating-coquette');
            setTimeout(() => {
                themeSwitcher.classList.remove('rotating-coquette');
            }, 1000); // Duration of the animation in milliseconds

            body.classList.remove('dark-mode');
            body.classList.add('coquette-mode');
            themeSwitcher.innerHTML = '<img src="coquette.png" alt="Switch to Dark Theme">';
            text = coquetteText; // Update text for coquette mode
        }

        // Restart typewriter effect with new text
        charIndex = 0;
        isDeleting = false;
        typeWriter();
    }

    themeSwitcher.addEventListener('click', switchTheme);
});