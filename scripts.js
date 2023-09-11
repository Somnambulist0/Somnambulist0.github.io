let sections = document.querySelectorAll('.section');
let currentSection = 0;
let text = 'Hi~ I am Jingcheng Ni, a student at Duke kunshan University.';
let typedText = document.getElementById('typed-text');
let index = 0;
let lastScrollTime = 0;  // Timestamp of the last scroll event
let touchStartY;  // Y-coordinate of the touch start position

function typeText() {
    if (index < text.length) {
        typedText.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 100);
    }
}

typeText();

function switchSection(direction) {
    let now = new Date().getTime();
    if (now - lastScrollTime < 300) {  // If less than 300ms since the last scroll, exit
        return;
    }
    lastScrollTime = now;

    sections[currentSection].style.display = 'none';  // Hide the current section
    if (direction === 'down' && currentSection < sections.length - 1) {
        currentSection++;
    } else if (direction === 'up' && currentSection > 0) {
        currentSection--;
    }
    sections[currentSection].style.display = 'flex';  // Show the new current section
}

document.addEventListener('wheel', function(event) {
    if (event.deltaY > 0) {
        switchSection('down');
    } else {
        switchSection('up');
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowDown') {
        switchSection('down');
    } else if (event.key === 'ArrowUp') {
        switchSection('up');
    }
});

document.addEventListener('touchstart', function(event) {
    touchStartY = event.touches[0].clientY;
});

document.addEventListener('touchend', function(event) {
    let touchEndY = event.changedTouches[0].clientY;
    if (touchEndY > touchStartY) {
        switchSection('up');
    } else if (touchEndY < touchStartY) {
        switchSection('down');
    }
});

document.getElementById('know-more').addEventListener('click', function() {
    switchSection('down');
});

document.getElementById('contact-me').addEventListener('click', function() {
    // Since "Just contact me" should lead to the third page, we'll switch twice.
    switchSection('down');
    switchSection('down');
});

let nextButtons = document.querySelectorAll('.next-btn');

nextButtons.forEach(button => {
    button.addEventListener('click', function() {
        switchSection('down');
    });
});

let backButtons = document.querySelectorAll('.back-btn');

backButtons.forEach(button => {
    button.addEventListener('click', function() {
        sections[currentSection].style.opacity = 0;
        currentSection = 0;
        sections[currentSection].style.opacity = 1;
    });
});


