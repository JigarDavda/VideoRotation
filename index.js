document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('video');
    const buttons = document.querySelectorAll('.button-bar button');
    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            const angle = btn.getAttribute('data-angle');
            console.log("angel--", angle)
            video.style.transform = `rotate(${angle}deg)`;
        });
    });
});