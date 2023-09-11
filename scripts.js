let sections = document.querySelectorAll('.section');
let currentSection = 0;
let text = 'Hi~ I am Jingcheng Ni, a student at Duke kunshan University.';
let typedText = document.getElementById('typed-text');
let index = 0;
let lastScrollTime = 0;  // Timestamp of the last scroll event

function typeText() {
    if (index < text.length) {
        typedText.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 100);
    }
}

typeText();

document.addEventListener('wheel', function(event) {
    let now = new Date().getTime();
    if (now - lastScrollTime < 300) {  // If less than 150ms since the last scroll, exit
        return;
    }
    lastScrollTime = now;

    sections[currentSection].style.display = 'none';  // Hide the current section
    if (event.deltaY > 0 && currentSection < sections.length - 1) {
        currentSection++;
    } else if (event.deltaY < 0 && currentSection > 0) {
        currentSection--;
    }
    sections[currentSection].style.display = 'flex';  // Show the new current section
});

