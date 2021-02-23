const hamburger = document.getElementById('hamburger');
const hamMenu = document.getElementById('hamburger-menu');

hamburger.addEventListener('click', ()=> {
    hamMenu.classList.toggle('show');
});