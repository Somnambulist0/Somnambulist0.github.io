document.addEventListener("DOMContentLoaded", function () {
    const introCard = document.querySelector('.intro-card');
    const profileSection = document.querySelector('.profile-section');

    introCard.addEventListener('click', function () {
        anime({
            targets: introCard,
            translateY: '-150%',
            easing: 'easeInOutQuart',
            duration: 1000,
            complete: function () {
                anime({
                    targets: profileSection,
                    left: '0%',
                    easing: 'easeInOutQuart',
                    duration: 1000
                });
                document.body.style.backgroundColor = '#444';
            }
        });
    });
});

