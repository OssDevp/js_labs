const menuToggle = document.querySelector('#menu-toggle');
const menu = document.getElementById('menu');


menuToggle.addEventListener('click', showMenu);

function showMenu() {
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        menuToggle.classList.remove('active');
    } else {
        menu.classList.add('active');
        menuToggle.classList.add('active');
    }
}