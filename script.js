document.addEventListener("DOMContentLoaded", function () {
    const nameIntro = document.querySelector('.name-intro');
    const sections = document.querySelectorAll('.section');

    // 初始动画
    setTimeout(() => {
        nameIntro.style.opacity = "1";
        nameIntro.style.transform = "translateY(0px)";
    }, 500);

    setTimeout(() => {
        sections.forEach((section, index) => {
            setTimeout(() => {
                section.style.opacity = "1";
                section.style.transform = "translateY(0px)";
            }, 500 * (index + 1));
        });
    }, 1500);
});
