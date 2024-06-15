const openMenuButton = document.getElementById('open-menu');
const closeMenuButton = document.getElementById('close-menu');
const sideMenu = document.getElementById('menu');

openMenuButton.addEventListener('click', () => {
    sideMenu.style.left = '0';
});

closeMenuButton.addEventListener('click', () => {
    sideMenu.style.left = '-60%';
});