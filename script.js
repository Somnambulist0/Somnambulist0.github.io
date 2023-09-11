document.addEventListener("DOMContentLoaded", function () {
    const fullNameDiv = document.querySelector('.full-name');

    fullNameDiv.addEventListener('click', function () {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    });
});
