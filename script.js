document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const nav = document.querySelector('nav');
    const header = document.querySelector('header');

    menuIcon.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
    });

    document.addEventListener('click', function(e) {
        if (!header.contains(e.target) && nav.classList.contains('active')) {
            toggleMenu();
        }
    });

    function toggleMenu() {
        nav.classList.toggle('active');
        header.classList.toggle('menu-open');
        menuIcon.classList.toggle('open');
    }

    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(e) {
        console.log('Form submitted');
    });

    function showMessage(message, type) {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        messageElement.className = `message ${type}`;
        contactForm.parentNode.insertBefore(messageElement, contactForm);
        
        setTimeout(() => {
            messageElement.remove();
        }, 5000);
    }
});