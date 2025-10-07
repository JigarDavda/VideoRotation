document.addEventListener('DOMContentLoaded', function() {
    const layout = document.querySelector('.layout');
    const buttons = document.querySelectorAll('.button-bar button');
    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove 'selected' from all buttons
            buttons.forEach(b => b.classList.remove('selected'));
            // Add 'selected' to the clicked button
            btn.classList.add('selected');
            const angle = btn.getAttribute('data-angle');
            layout.style.transform = `rotate(${angle}deg)`;
        });
    });
});


