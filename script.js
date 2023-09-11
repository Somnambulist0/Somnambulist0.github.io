document.addEventListener("DOMContentLoaded", function () {
    const introCard = document.getElementById('introCard');
    const typingText = document.getElementById('typingText');
    const cursor = document.getElementById('cursor');
    const message = [
        'Hi~ I am Jingcheng Ni,',
        'a Computer Science student at Dukekunshan University'
    ];
    let line = 0;
    let index = 0;
    let typingInterval;

    // 开始打字
    function startTyping() {
        typingInterval = setInterval(function () {
            typingText.textContent += message[line][index];
            index++;
            if (index >= message[line].length) {
                index = 0;
                line++;
                clearInterval(typingInterval);
                if (line < message.length) {
                    typingText.textContent += '\n';
                    startTyping();
                } else {
                    cursor.style.animation = 'none';
                    cursor.textContent = '█';  // Static cursor when typing is done
                }
            }
        }, 100);  // 每个字母打印的时间间隔
    }

    startTyping();

    introCard.addEventListener('click', function () {
        anime({
            targets: introCard,
            translateY: '-150%',
            easing: 'easeInOutQuart',
            duration: 1000
        });
    });
});

