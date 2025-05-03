// Dropdown Menu Toggle
function hamburg() {
    document.querySelector(".dropdown").classList.add("active");
}

function cancel() {
    document.querySelector(".dropdown").classList.remove("active");
}

// Close dropdown when clicking a link
document.querySelectorAll(".dropdown a").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector(".dropdown").classList.remove("active");
    });
});

// Typewriter Effect
const textArray = ["Web Developer", "Designer", "Freelancer"];
let textIndex = 0;
let charIndex = 0;
const typewriterText = document.querySelector(".typewriter-text");

function typeWriter() {
    if (charIndex < textArray[textIndex].length) {
        typewriterText.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 100);
    } else {
        setTimeout(eraseText, 2000);
    }
}
function downloadCV() {
    const link = document.createElement('a');
    link.href = 'cv.pdf';
    link.download = 'Taihan_Ibn_Altaf_CV'; // Custom filename
    link.click();
  }

function eraseText() {
    if (charIndex > 0) {
        typewriterText.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(typeWriter, 500);
    }
}

// Initialize AOS (Animate On Scroll)
AOS.init({
    offset: 0,
    duration: 1000,
    once: true
});

// Start the typewriter effect
window.onload = typeWriter;