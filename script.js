let sections = document.querySelectorAll('.section');
let currentSection = 0;
let text = 'Hi~ I am Jingcheng Ni, a student at Dukekunshan University.';
let typedText = document.getElementById('typed-text');
let index = 0;

function typeText() {
    if (index < text.length) {
        typedText.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 100);
    }
}

typeText();

document.addEventListener('wheel', function(event) {
    if (event.deltaY > 0 && currentSection < sections.length - 1) {
        sections[currentSection].style.opacity = 0;
        currentSection++;
        sections[currentSection].style.opacity = 1;
    } else if (event.deltaY < 0 && currentSection > 0) {
        sections[currentSection].style.opacity = 0;
        currentSection--;
        sections[currentSection].style.opacity = 1;
    }
});
