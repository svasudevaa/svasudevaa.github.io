// Typewriter animation
const typewriterElement = document.getElementById('typewriter');
const phrases = ["Vasudev S", "Software Engineer", "Web Developer"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const delayBetweenPhrases = 1500;

function type() {
    const currentPhrase = phrases[phraseIndex];
    const currentText = currentPhrase.slice(0, charIndex);
    typewriterElement.textContent = currentText;

    if (!isDeleting && charIndex < currentPhrase.length) {
        charIndex++;
        setTimeout(type, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(type, deletingSpeed);
    } else if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(type, delayBetweenPhrases);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(type, typingSpeed);
    }
}

// Start the typewriter animation when the page loads
document.addEventListener('DOMContentLoaded', type);
