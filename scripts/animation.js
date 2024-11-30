document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.product, .features, .plants, .footer');

    function checkVisibility() {
        const windowHeight = window.innerHeight;
        elements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top <= windowHeight * 0.8) {
                el.classList.add('animate');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
});
