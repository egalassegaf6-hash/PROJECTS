const hamburgerMenu = document.getElementById('hamburger_menu');
const navMenu = document.querySelector('.nav-menu');

hamburgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    // Switch icon bars ke close (X)
    const icon = hamburgerMenu.querySelector('i');
    if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
});