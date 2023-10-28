const burgerMenu = document.querySelector('.mobil__burger-menu');
const dropDown = document.querySelector('.drop-down');
const menuClose = document.querySelector('.drop-down__burger-menu_close ');

burgerMenu.addEventListener('click', () => {
    dropDown.classList.add('drop-down--active');
});

menuClose.addEventListener('click', () => {
    dropDown.classList.remove('drop-down--active');
})

