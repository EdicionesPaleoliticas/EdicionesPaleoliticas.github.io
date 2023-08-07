const huesito = document.getElementById('huesito');
const menu = document.getElementById('menu');
const link = document.getElementById('menu-link');

huesito.addEventListener('click', () => {
    menu.classList.toggle('menu-open');
});


