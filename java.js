// JavaScript for Scroll Animation
function checkVisibility() {
    let sections = document.querySelectorAll('section');

    sections.forEach(section => {
        let sectionPos = section.getBoundingClientRect().top;
        let screenPos = window.innerHeight / 1.3;

        if (sectionPos < screenPos) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
}

// Run on scroll
window.addEventListener('scroll', checkVisibility);

// Run on page load
document.addEventListener('DOMContentLoaded', checkVisibility);
