const hamburger = document.getElementById('hamburger');
const hamMenu = document.getElementById('hamMenu');

hamburger.addEventListener('click', ()=> {
    hamMenu.classList.toggle('show');
});