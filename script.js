// Setup current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// --- Typewriter Effect ---
const words = ["Cybersecurity Analyst", "UI/UX Designer", "Security Enthusiast"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;
let pauseBetween = 2000;
const typewriterElement = document.getElementById("typewriter");

function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
        // Remove char
        typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50; // faster when deleting
    } else {
        // Add char
        typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 150; // slower when typing
    }

    // If complete word typed
    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = pauseBetween;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex++;
        if (wordIndex >= words.length) {
            wordIndex = 0;
        }
        typeSpeed = 500; // tiny pause before typing next word
    }

    setTimeout(type, typeSpeed);
}

// Init Typewriter
if (typewriterElement) {
    document.addEventListener("DOMContentLoaded", () => {
        setTimeout(type, 1000);
    });
}

// --- Mobile Navigation Menu ---
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu on link click
navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// --- Scroll Effects ---
const header = document.querySelector('header');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    // 1. Header Scrolled state
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // 2. Active Nav Link based on Scroll Position
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinksItems.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === `#${current}`) {
            a.classList.add('active');
        }
    });
});

// --- Simple Contact Form Submission (Mock) ---
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const submitBtn = document.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;

        // Disable and show loading
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Sending...';

        // Mock API call
        setTimeout(() => {
            submitBtn.innerHTML = 'Message Sent! ✔';
            submitBtn.style.background = 'var(--clr-accent)';
            contactForm.reset();

            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = '';
            }, 3000);

        }, 1500);
    });
}

